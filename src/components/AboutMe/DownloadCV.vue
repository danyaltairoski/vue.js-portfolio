<template>
    <div class="CVButtonContainer">
        <div class="CVButton" @click="downloadCV">
            <p class="btn-text">Download CV</p>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            downloadCV() {
            // Replace 'your_cv_filename.pdf' with the actual filename of your CV
            const filename = 'your_cv_filename.pdf';
            
            // Replace 'path_to_your_cv' with the actual path to your CV file
            const filePath = 'path_to_your_cv/' + filename;
            
            // Create a link element
            const link = document.createElement('a');
            link.href = filePath;
            link.download = filename;
            
            // Dispatch a click event on the link
            link.dispatchEvent(new MouseEvent('click'));
            }
        }
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
    background: var(--blue, #0762F7);
    box-shadow: 0px 3.4660141468048096px 3.4660141468048096px 0px rgba(0, 0, 0, 0.25);
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