<template>
    <div class="bg-transparent pt-8">
        <form>
            <label class="relative block w-3/4 ml-16 ">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg class="h-5 w-5 fill-black" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                        <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
                        </path>
                    </svg>
                </span>
                <input
                    class="w-full bg-white placeholder:font-italitc border border-slate-300 rounded-lg py-2 pl-10 pr-4 focus:outline-none"
                    placeholder="Search any keywords" 
                    type="text" 
                    v-bind="searchInput"
                />
            </label>
        </form>
        <div class="w-9 h-9 left-[940px] top-[-35px] p-2.5 rounded-full relative bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
            </svg>
        </div>
        
        <div class="w-9 h-9 left-[1010px] top-[-70px] p-2.5 rounded-full relative bg-white">
            <img src="../../assets/img/dummyUserProfileImg.png" class='w-11' alt="profile picture" title="user avatar" />
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Navigation',
    props: ['searchInput'],
}
</script>