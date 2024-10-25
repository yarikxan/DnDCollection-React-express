

export default function SpecialStatBox({top, bottom}) {
    return (
        <div>
            <section>
                {top}
            </section>

            <section style={{paddingTop: "0.3rem"}}>
                {bottom}
            </section>
        </div>
    )
}
