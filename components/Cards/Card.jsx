import React from "react"

export default function Card({children, ...rest}) {
    return <div class="card">{children}</div>
}

{/* <Card>
<Card.Icon><i class="bi bi-house-door"></i></Card.Icon>
<Card.Title>Safe House</Card.Title>
<Card.Text>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Text>
</Card> */}