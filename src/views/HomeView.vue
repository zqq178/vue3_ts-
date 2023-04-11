<script setup lang="ts">
</script>

<template>
  <main>
    <div>
      <!-- 1.基础用法 -->
      <van-grid>
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
      </van-grid>
      <!-- 2.格子之间带间距 -->
      <van-grid :gutter="10">
        <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
      </van-grid>
      <!-- 3.内容横排 -->
      <van-grid direction="horizontal" :column-num="3">
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
      </van-grid>
      <!-- 4.正方形格子 -->
      <van-grid square>
        <van-grid-item v-for="value in 4" :key="value" icon="photo-o" text="文字" />
      </van-grid>
    </div>
  <div>
    <!-- 5. 自定义列数-->
    <van-grid :column-num="3">
      <van-grid-item v-for="value in 3" :key="value" icon="photo-o" text="文字" />
    </van-grid>
  </div>
  <div>
    <!-- 6.自定义内容 -->
    <van-grid :border="false" :column-num="3">
    <van-grid-item>
      <van-image
        src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg"
      />
    </van-grid-item>
    <van-grid-item>
      <van-image
        src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg"
      />
    </van-grid-item>
    <van-grid-item>
      <van-image
        src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg"
      />
    </van-grid-item>
  </van-grid>
  </div>
  <!-- 7.页面导航 -->
  <div>
    <van-grid clickable :column-num="2">
      <van-grid-item icon="home-o" text="路由跳转" to="/counter" />
      <van-grid-item icon="search" text="URL 跳转" url="https://github.com" />
    </van-grid>
  </div>
  <!-- 8.徽标提示 -->
  <div>
    <van-grid :column-num="2">
      <van-grid-item icon="home-o" text="文字" dot />
      <van-grid-item icon="search" text="文字" badge="99+" />
    </van-grid>
  </div>
  </main>
</template>
