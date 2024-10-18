import './NotFoundPage.css';



export default function NotFoundPage(){

    return(
        <section className="notFoundPage">
            <div className="infoBlock">
                <h1>404</h1>
                <p>Page you looking for doesn't exist</p>
            </div>
            <div>
                <img className="notFoundImg" src="/img/notFound.jpg" />
            </div>
        </section>
    )
}
