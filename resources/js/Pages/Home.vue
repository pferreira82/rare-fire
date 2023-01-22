<script setup>
import {Head} from '@inertiajs/vue3';
import '/resources/js/startup';

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
    name: String
});
</script>

<template>
    <Head title="Home">
        <title>Rare Fire</title>
    </Head>
    <div>

        <p>{{ name }}</p>
        <div class="circle-reveal-intro full-height">
            <div class="fixed-wrapper">
                <div class="circle-reveal-wrapper header light">
                    <div class="circle-background white"></div>
                    <div class="header-wrapper row valign-wrapper">
                        <div class="col s12 m8 offset-m2">
                            <h1>FIRST!</h1>
                            <span class="tagline">Show off your business in a whole new way 1.</span>
                            <button class="read-more"><i class="icon-caret-down"></i></button>
                        </div>
                    </div>
                </div>

                <div class="circle-reveal-wrapper header">
                    <div class="circle-background pink"></div>
                    <div class="header-wrapper row valign-wrapper">
                        <div class="col s12 m8 offset-m2">
                            <h1>SECOND!</h1>
                            <span class="tagline">Show off your business in a whole new way.</span>
                            <button class="read-more"><i class="icon-caret-down"></i></button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Features -->
            <div class="section background-layer valign-wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col s12"><h2 class="section-title">Features</h2></div>
                        <div class="col s12 m6 l4">
                            <h4><i class="icon-light-bulb"></i></h4>
                            <p class="caption">This is a cool feature about your product! It really separates you from
                                the crowd.</p>
                        </div>
                        <div class="col s12 m6 l4">
                            <h4><i class="icon-bolt"></i></h4>
                            <p class="caption">This is a cool feature about your product! It really separates you from
                                the crowd.</p>
                        </div>
                        <div class="col s12 m6 l4">
                            <h4><i class="icon-rocket"></i></h4>
                            <p class="caption">This is a cool feature about your product! It really separates you from
                                the crowd.</p>
                        </div>
                        <div class="col s12 m6 l4">
                            <h4><i class="icon-settings"></i></h4>
                            <p class="caption">This is a cool feature about your product! It really separates you from
                                the crowd.</p>
                        </div>
                        <div class="col s12 m6 l4">
                            <h4><i class="icon-umbrella"></i></h4>
                            <p class="caption">This is a cool feature about your product! It really separates you from
                                the crowd.</p>
                        </div>
                        <div class="col s12 m6 l4">
                            <h4><i class="icon-compass"></i></h4>
                            <p class="caption">This is a cool feature about your product! It really separates you from
                                the crowd.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
