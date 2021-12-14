<template>
    <div class="tw-container">
       <iframe
            class="twitch-embed"
            src="https://player.twitch.tv/?channel=brivals&enableExtensions=false&muted=true&parent=brivalsweb.vercel.app/&player=popout&volume=0.3&autoplay=true" 
            height="1080" 
            width="1920" 
            frameborder="0" 
            scrolling="no" 
            allowfullscreen="true"></iframe>
        <iframe
            class="twitch-chat"
            frameborder="0" 
            src="https://www.twitch.tv/embed/brivals/chat?darkpopout&parent=brivalsweb.vercel.app"
            height="1080"
            width="450">
        </iframe>
    </div>
    
</template>

<script>
export default {   
}
</script>







