import './styles.scss';

function Banner() {
    return (
        <div className='container'>
            <h2 className='eyes'>fhce</h2>
            <>
                <h1 className='motto'>Eat. Dont Sleep. Repeat.</h1>
                <div className='eyeball'></div>
                <img className='logo' src='images/artist-logos/sleepy-eyes.png' />
            </>
            <h2 className='eyes'>echf</h2>
        </div>
    )
}

export default Banner;