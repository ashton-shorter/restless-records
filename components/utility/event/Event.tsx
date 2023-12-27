import './styles.scss';

import { event } from '../../definititon';

function Event(props: event) {
    const info = props.info;
    //#region Date Formatting
    // Get the day's suffix
    const nthNumber = (number: number) => {
        if (number > 3 && number < 21) return "th";
        switch (number % 10) {
            case 1:
            return "st";
            case 2:
            return "nd";
            case 3:
            return "rd";
            default:
            return "th";
        }
    };

    const month = info.date.toLocaleString('default', { month: 'long'});
    const day = info.date.getUTCDate();
    const year = info.date.getUTCFullYear();

    const eventDate =  month + " " + day + nthNumber(day) + ", " + year;
    //#endregion Date Formatting

    return (
        <div className='event'>
            <img className='event__image' src={info.image} />
            <div className='event__overlay' />
            <div className='event__header'>
                <h1 className='event__header__title'>{info.name}</h1>
                <p className='event__header__subTitle'>Presented By {info.company}</p>
            </div>

            <div className='event__grid__titles'>
                    {/* <div className='event__grid__titles__title' style={{display: 'flex', gap: '52px', justifyContent: 'start', alignItems: 'center'}}>
                        <h2>Musicians</h2>
                        { info.hiring.includes("musician") ? <button className='event__hiring' onClick={() => {}}>Hiring</button> : null }
                    </div>
                    <div className='event__grid__titles__title' style={{display: 'flex', gap: '50px', justifyContent: 'center', alignItems: 'center'}}>
                        <h2>Vendors</h2>
                        { info.hiring.includes("vendor") ? <button className='event__hiring' onClick={() => {}}>Hiring</button> : null }
                    </div> */}
                    <h2 className='event__grid__titles__title'>Musicians</h2>
                    {info.vendors.length > 0 ? <h2 className='event__grid__titles__title'>Vendors</h2> : null}
                    <h2 className='event__grid__titles__title'>Details</h2>
            </div>

            <div className='event__grid'>
                <div id={info.musicians.length > 4 ? 'musicians' : ''} className='event__grid__section'>
                    {
                        info.musicians.map((musician, i) => (
                            <p key={i} className='event__grid__section__item' onClick={() => props.toggleProfile(musician)}>{musician.name}</p>
                        ))
                    }
                    {/* <div className='event__grid__section__hiring'>
                        { info.hiring.includes("musician") ? <button className='event__hiring' onClick={() => {}}>Hiring</button> : null }
                    </div> */}
                </div>

                {info.vendors.length > 0 ?
                    <div className='event__grid__section'>
                        {
                            info.vendors.map((vendor, i) => (
                                <p key={i} className='event__grid__section__item' onClick={() => props.toggleProfile(vendor)}>{vendor.name}</p>
                            ))
                        }
                        {/* { info.hiring.includes("vendor") ? <button className='event__hiring' onClick={() => {}}>Hiring</button> : null } */}
                    </div>
                : null}

                <div className='event__grid__section'>
                    <p className='event__grid__section__item__nohover'>{info.bio}</p>
                    <div className='event__grid__section__item__nohover'>
                        <p className='event__grid__details__time__date'>{eventDate}</p>
                        <p className='event__grid__details__time__doors'>{info.doors}PM</p>
                    </div>

                    <div className='event__grid__section__item__nohover'>
                        <p className='event__grid__details__location__venue'>{info.venue}</p>
                        <p className='event__grid__details__location__address'>{info.address}</p>
                    </div>

                    <a target="_blank" rel="noopener noreferrer" href={info.paymentUrl}>
                        <button className='event__grid__details__purchase'>Tickets ${info.price}</button>
                    </a>
                </div>
            </div>

            {info.hiring.length > 0 ?
                <button id='hiring' onClick={() => {}}>Hiring</button>
            : null}

            {info.ageRestriction ? <p id="ageRestriction">{info.ageRestriction}+</p> : null }
        </div>
    )
}

export default Event;