<template>
<div>
    <div class="page-title-area">
        <div class="container">
            <ul>
                <li>
                    <nuxt-link to="/">Home</nuxt-link>
                </li>
                <li>Styling White Jeans after Labor Day</li>
            </ul>
        </div>
    </div>

    <section class="blog-details-area ptb-60">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12">
                    <div class="blog-details">
                        <div class="article-img">
                            <img src="../assets/img/blog2.jpg" alt="image">
                        </div>

                        <div class="article-content">
                            <ul class="entry-meta">
                                <li>
                                    <Smile /> Amy Binder
                                </li>
                                <li>
                                    <Calendar /> JUNE 22, 2020
                                </li>
                                <li>
                                    <Chat /> 2 Comment
                                </li>
                            </ul>

                            <h3>Freedom & Responsibility</h3>

                            <p>Everyone knows that Ronny’s Pizza, inspired by freedom-loving Americans, loves freedom! We love the simple freedom of customizing a pizza, writing on the walls, ordering delivery no matter where we are – at home, at work or at the park! </p>

                            <p>
                                My father, Ronny, always told me that freedom and responsibility go hand in hand.
                                America has been in turmoil after the violent death of George Floyd. This death is just the most current depiction of racial injustice in the US. </p>
                            <p>
                                One of my responsibilities as an American citizen, and as a white American citizen, is to acknowledge the ways I am complicit with a system that discriminates against black and indigenous people of color. I must do my part to oppose racism in every form, and to oppose police brutality in every instance.
                            </p>
                            <p>
                                As a Georgian citizen, and a founder and owner of Ronny’s Pizza, I also have a responsibility to create a business environment that values the lives and the wellbeing of all people!
                            </p>

                            <blockquote class="wp-block-quote">
                                <Quote />
                                <p>Freedom and responsibility go hand in hand.</p>

                                <cite>Ronny Binder</cite>
                            </blockquote>
                            <p>
                                At Ronny’s we do not discriminate based on race or religion when hiring. We strive to offer the same great service to every customer, regardless of cultural, economic, or social background. We aim to be a positive and inclusive voice on social media.
                            </p>
                            <p>
                                As Tbilisi becomes more globalized, we need to embrace diversity and denounce prejudices towards tourists and study programs and investors seeking to be a part of our larger community.
                            </p>
                            <p>
                                At Ronny’s we reaffirm our commitment to standing up against racism, and we invite others to join us in building relationships, businesses, and communities that foster justice and equality.
                            </p>
                            <p>
                                Let’s guard our freedoms by shouldering our responsibilities!</p>

                            <ul class="category">
                                <li><span>Tags:</span></li>
                                <li>
                                    <nuxt-link to="/">Blog</nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/">Ronny's</nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/">Ammy Binder</nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="comments-area">
                        <h3 class="comments-title">2 Comments: (There will Facebook Comments)</h3>
                    </div>
                </div>

                <div class="col-lg-4 col-md-12">
                    <aside class="widget-area" id="secondary">
                        <section class="widget widget_comero_posts_thumb">
                            <h3 class="widget-title">Popular Posts</h3>

                            <article class="item">
                                <nuxt-link to="/blog-details" class="thumb">
                                    <span class="fullimage cover bg1" role="img"></span>
                                </nuxt-link>
                                <div class="info">
                                    <time datetime="2019-06-30">June 30, 2019</time>
                                    <h4 class="title usmall">
                                        <nuxt-link to="/blog-details">Why Georgia?</nuxt-link>
                                    </h4>
                                </div>

                                <div class="clear"></div>
                            </article>

                        </section>

                        <section class="widget widget_recent_entries">
                            <h3 class="widget-title">Recent Posts</h3>

                            <ul>
                                <li><a href="#">How to Become a Successful Entry Level UX Designer</a></li>
                                <li><a href="#">How to start your business as an entrepreneur</a></li>
                                <li><a href="#">How to be a successful entrepreneur</a></li>
                                <li><a href="#">How to Become a Successful Entry Level UX Designer</a></li>
                                <li><a href="#">Protect your workplace from cyber attacks</a></li>
                            </ul>
                        </section>

                        <section class="widget widget_categories">
                            <h3 class="widget-title">Categories</h3>

                            <ul>
                                <li><a href="#">Pizza

                                    </a></li>
                                <li><a href="#">Extras</a></li>
                                <li><a href="#">Drinks</a></li>
                                <li><a href="#">Combos</a></li>
                            </ul>
                        </section>

                        <section class="widget widget_tag_cloud">
                            <h3 class="widget-title">Tags</h3>

                            <div class="tagcloud">
                                <a href="#">Ronny's <span class="tag-link-count"> (3)</span></a>
                                <a href="#">Emmy Biner <span class="tag-link-count"> (3)</span></a>
                                <a href="#">Shop <span class="tag-link-count"> (2)</span></a>
                                <a href="#">Marketing <span class="tag-link-count"> (2)</span></a>
                                <a href="#">Combos <span class="tag-link-count"> (1)</span></a>
                                <a href="#">Tips <span class="tag-link-count"> (2)</span></a>
                            </div>
                        </section>
                    </aside>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import Quote from 'assets/img/quote-ronnyspizza-pizza.svg';
import Smile from 'assets/img/smile-ronnyspizza-pizza.svg';
import Calendar from 'assets/img/calendar-ronnyspizza-pizza.svg';
import Chat from 'assets/img/chat-ronnyspizza-pizza.svg';
export default {
    components: {
        Quote,
        Smile,
        Calendar,
        Chat
    }
}
</script>
