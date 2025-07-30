type Props = {
    direction: string,
    tailStyle: string
}

export default function BubbleSquare({direction = 'right', tailStyle = 'default'}: Props): JSX.Element {

    return (
        <div className={`bubble-body ${direction} ${tailStyle}`}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, quos.</p>
        </div>
    )
}