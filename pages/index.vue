<template>
    <div class="twitch">
        <div class="twitch-video">
            <iframe
            src="https://player.twitch.tv/?channel=brivals&enableExtensions=false&parent=www.brivals.tv&player=popout&volume=0.3&autoplay=true" 
            height="1080" 
            width="1920" 
            frameborder="0" 
            scrolling="no" 
            allowfullscreen="true"></iframe>
        </div>
        <div class="twitch-chat">
            <iframe
            frameborder="0" 
            src="https://www.twitch.tv/embed/brivals/chat?darkpopout&parent=www.brivals.tv"
            height="1080"
            width="450">
        </iframe>
        </div>
    </div>
    
</template>

<script>
export default {   
}
</script>