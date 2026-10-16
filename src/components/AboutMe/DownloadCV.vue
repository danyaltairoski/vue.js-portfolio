<template>
    <div class="CVButtonContainer">
        <div class="CVButton">
            <p class="btn-text">Download CV</p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.CVButtonContainer {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 10%;
    right: 30%;
}

.CVButton {
    display: flex;
    width: 200px;
    height: 48px;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #003A7A;
    box-shadow: 0px 3.4660141468048096px 3.4660141468048096px 0px rgba(2, 34, 71, 0.2);
    cursor: pointer;
}

.btn-text {
    color: #FFF;
    font-family: Sora;
    font-size: 20.796px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
</style>
