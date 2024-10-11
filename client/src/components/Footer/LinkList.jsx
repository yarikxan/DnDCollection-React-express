
export default function LinkList({title,links}){
    return (
        <div>
            <h1>{title}</h1>
            {links.map((link) => (
                <a key={link.name} href={link.href}>{link.name}</a>
            ))}
        </div>
    )
    
}
