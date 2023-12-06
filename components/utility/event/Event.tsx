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
            <div className='event__overlay' />
            <div className='event__header'>
                <h1 className='event__header__title'>{info.name}</h1>
                <p className='event__header__subTitle'>{info.subTitle}</p>
            </div>

            <div className='event__grid__titles'>
                    <h2 className='event__grid__titles__title'>Musicians</h2>
                    <h2 className='event__grid__titles__title'>Vendors</h2>
                    <h2 className='event__grid__titles__title'>Details</h2>
            </div>

            <div className='event__grid'>
                <div id='musicians' className='event__grid__section'>
                    {
                        info.musicians.map((musician, i) => (
                            <p key={i} className='event__grid__section__item' onClick={() => props.toggleProfile(musician)}>{musician.name}</p>
                        ))
                    }
                </div>

                <div className='event__grid__section'>
                    {
                        info.vendors.map((vendor, i) => (
                            <p key={i} className='event__grid__section__item' onClick={() => props.toggleProfile(vendor)}>{vendor.name}</p>
                        ))
                    }
                </div>

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
        </div>
    )
}

export default Event;