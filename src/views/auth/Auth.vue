<template>
    <div>
        <div class="Background">
            <router-view></router-view>
        </div>
    </div>
</template>

<style lang="scss">
.Background{
    background-color: gray;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
