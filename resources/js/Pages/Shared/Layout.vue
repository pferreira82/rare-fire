<template>
    <transition
        appear
        @before-enter="beforeEnter"
        @enter="enter"
    >
        <section class="p-6 bg-sky-900">
            <header class="flex justify-between">
                <h1 class="font-bold text-lg" style="color: #FFFFFF">Rare Fire</h1>
                <Nav />
            </header>
        </section>
    </transition>

    <section class="p-6">
        <div class="max-w-3xl mx-auto">
            <slot />
        </div>
    </section>
</template>

<script>
import Nav from "@/Pages/Shared/Nav.vue";
import gsap from 'gsap';

export default {
    name: "Layout",
    components: {
        Nav
    },
    setup() {
        const beforeEnter = (el) => {
            el.style.transform = 'translateY(-60px)';
            el.style.opacity = 0;
        }
        const enter = (el) => {
            gsap.to(el, {
                duration: 1,
                y: 0,
                opacity: .8,
                // ease: 'bounce.out'
            })
        }
        return { beforeEnter, enter };
    }
}
</script>

<style scoped>

</style>
