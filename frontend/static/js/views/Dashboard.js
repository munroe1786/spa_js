import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1>Welcome back, Eliza</h1>
            <p>
                Of course he's a happy little stone, cause we don't have any other kind. Working it up and down, back and forth. You can work and carry-on and put lots of little happy things in here. Use what you see, don't plan it.

                Any little thing can be your friend if you let it be. Those great big fluffy clouds. Maybe we got a few little happy bushes here, just covered with snow.

                Now let's put some happy little clouds in here. I like to beat the brush. Let your imagination be your guide.

                In your world you have total and absolute power. Trees live in your fan brush, but you have to scare them out. Remember how free clouds are. They just lay around in the sky all day long. We tell people sometimes: we're like drug dealers, come into town and get everybody absolutely addicted to painting. It doesn't take much to get you addicted. You can do anything here. So don't worry about it. When you buy that first tube of paint it gives you an artist license.

                If you've been in Alaska less than a year you're a Cheechako. You want your tree to have some character. Make it special. But we're not there yet, so we don't need to worry about it. Just make a decision and let it go. I'm gonna start with a little Alizarin crimson and a touch of Prussian blue Let that brush dance around there and play.

                Everybody's different. Trees are different. Let them all be individuals. That's the way I look when I get home late; black and blue. We'll do another happy little painting. Maybe he has a little friend that lives right over here. Every day I learn.

                Do an almighty painting with us. The first step to doing anything is to believe you can do it. See it finished in your mind before you ever start. Maybe there's a happy little waterfall happening over here. We have a fantastic little sky! So often we avoid running water, and running water is a lot of fun.
            </p>
            <p>
                <a href="/posts" data-link>View recent posts</a>
            </p>
        `;
    }
}