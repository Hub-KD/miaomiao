<template>
  <div class="footer">
        <ul>
            <router-link tag="li" to="/home">
                <a href="javascript:;" class="current">
                    <span class="iconfont">&#xe679</span>
                    <span>电影</span>
                </a>
            </router-link>
            <router-link tag="li" to="/movie">
                <a href="javascript:;" >
                    <span class="iconfont">&#xe507</span>
                    <span>影院</span>
                </a>
            </router-link>
            <router-link tag="li"  to="/mine">
                <a href="javascript:;">
                    <span class="iconfont">&#xe61b</span>
                    <span>我的</span>
                </a>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.router-link-active a{
    color: #ff5f16!important;
}
.footer {
    max-width: 10rem;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 1.333333rem;
    background-color: #fff;
    border-top: 1px solid #eee;
}

.footer ul {
    z-index: 10;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
}

.footer ul li {
    width: 33.33%;
    text-align: center;
    font-size: .373333rem;
}

.footer ul li a {
    display: block;
    height: 100%;
    color: #666;
}

.footer ul li a span {
    display: block;
}

</style>