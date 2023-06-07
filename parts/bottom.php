<section id="bottom">
    <div class="container">
        <?php $image_bottom = get_field('bottom_image'); ?>
        <img src="<?= esc_url($image_bottom['url']); ?>" alt="<?= esc_attr($image_bottom['alt']); ?>">
        <div class="anim-container">
            <div class="content">
                <?php the_field('content_bottom'); ?>
            </div>
        </div>
    </div>
</section>