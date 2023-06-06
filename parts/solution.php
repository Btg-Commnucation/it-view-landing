<section id="solution" class="solution">
    <div class="container">
        <div class="anim-container">
            <h2><?php the_field('titre_solution'); ?></h2>
        </div>
        <?php if (have_rows('liste')) : ?>
            <ul class="liste">
                <?php while (have_rows('liste')) : the_row(); ?>
                    <li>
                        <span class="number"><?php the_sub_field('numero'); ?></span>
                        <span class="question">
                            <span class="texte">
                                <?php the_sub_field('question'); ?>
                            </span>
                        </span>
                    </li>
                <?php endwhile; ?>
            </ul>
        <?php endif; ?>
    </div>
    <div id="observer-solution"></div>
</section>