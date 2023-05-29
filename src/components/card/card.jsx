import './card.css'
export default function CardProvider(props) {
    const { children, className } = props
    return (
        <div className={className}>
            <div className='child'>
                {children}
            </div>
        </div>
    )
}