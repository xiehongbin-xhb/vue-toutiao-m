<template>
  <div class="channel-edit-container">
    <van-cell>
      <div slot="title" class="title">我的频道</div>
      <van-button
        type="danger"
        center
        plain
        round
        size="mini"
        @click="isEdit=!isEdit"
    >{{ isEdit ? '完成' : '编辑'}}</van-button>
    </van-cell>
    <van-grid :gutter="10">
      <van-grid-item
        class="grid-item"
        :class="{active: index === activeNum}"
        v-for="(channel, index) in userChannels"
        :key="index"
        :icon="(isEdit && index !== 0)  ? 'clear' : ''"
        :text="channel.name"
        @click="onUserChannelClick(channel, index)"
      />
    </van-grid>
    <!-- 频道推荐 -->
    <van-cell>
      <div slot="title" class="title">频道推荐</div>
    </van-cell>
    <van-grid :gutter="10">
      <van-grid-item
        class="grid-item"
        v-for="(channel, index) in recommendChannels"
        :key="index"
        :text="channel.name"
        :border="false"
        @click="onAdd(channel)"
      />
    </van-grid>
  </div>
</template>
<script>
import { getAllChannels, addUserChannels, deleteUserChannels } from '@/api/channel.js'
import { setItem } from '@/util/storage'
import { mapState } from 'vuex'
export default {
  name: 'ChannelEdit',
  props: {
    userChannels: {
      type: Array,
      required: true
    },
    activeNum: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      allChannels: [],
      isEdit: false // 控制编辑状态
    }
  },
  created () {
    this.loadAllChannels();
  },
  computed: {
    ...mapState({
      user: 'user'
    }),
    recommendChannels () {
      return this.allChannels.filter(channel => {
        // channel 是所有频道的
        return !this.userChannels.find(userChannel => {
          // userChannel 是我的频道
          return userChannel.id === channel.id
        })
      })
    }
  },

  methods: {
    async loadAllChannels () {
      const { data } = await getAllChannels();
      this.allChannels = data.data.channels;
    },
    async onAdd (channel) {
      this.userChannels.push(channel);

      // 数据持久化
      if (this.user) {
        // 登录了 数据存储到线上
        await addUserChannels({
          channels: [
            {
              id: channel.id,
              seq: this.userChannels.length // 插入的顺序 序号
            }
          ]
        })
      } else {
        // 没有登录，数据存储到本地
        setItem('user-channels', this.userChannels);
      }
    },
    onUserChannelClick (channel, index) {
      // 编辑状态 删除频道
      // 非编辑状态 切换频道
      if (this.isEdit) {
        // 删除操作
        this.deleteChannel(channel, index);
      } else {
        // 切换操作
        this.switchChannel(index);
      }
    },
    async deleteChannel (channel, index) {
      // 删除
      // 推荐频道不允许删除
      // 如果删除的选项是当前激活的选项之前的选项
      if (index <= this.activeNum) {
        // 更新当前激活频道的
        this.$emit('update-active', this.activeNum - 1)
      }
      if (this.isEdit && index !== 0) {
        this.userChannels.splice(index, 1);
        // 数据持久化
        if (this.user) {
          // 登录了
          await deleteUserChannels({ id: channel.id });
        } else {
          // 没有登录，数据存储到本地
          setItem('user-channels', this.userChannels);
        }
      }
    },
    switchChannel (index) {
      // 切换
      this.$emit('update-active', index);
      this.$emit('closePopup');
    }
  }
}
</script>
<style lang="less" scoped>
.channel-edit-container {
  padding-top: 54px;
  .title {
    font-size: 16px;
    color:#333;
  }
  .grid-item {
    width: 80px;
    height: 43px;
    // position: relative;
    /deep/ .van-grid-item__content {
      background-color: #f4f5f6;
      .van-grid-item__text {
        font-size: 14px;
        color:#222;
        margin-top: unset;
      }
    }
    /deep/ .van-grid-item__icon {
      position: absolute;
      right: -5px;
      top:-5px;
      font-size: 20px;
      color:#ccc;
    }

  }
  .active {
    /deep/ .van-grid-item__text {
      color: red !important;
    }
  }

}
</style>
