import BlogItem from "../composants/blog";
import Container from "../composants/container";

export default function Bloglist(){
    return(
        <section id="bloglist">
            <Container>
                <div className="row align-items-stretch">
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                </div>
            </Container>
        </section>
    )
}