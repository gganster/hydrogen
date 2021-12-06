
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import frLocale from '@fullcalendar/core/locales/fr';
import interactionPlugin from "@fullcalendar/interaction"

const Calendar = (props) => {
  const {
    className,
    style,
    events,
    onResize,
    onDrop,
    height
  } = props;

  return (
    <div className=""
         style={{height, ...style}}>
      <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin, timeGridPlugin ]}
        //themeSystem="bootstrap"
        initialView="timeGridWeek"
        locales={[frLocale]}
        locale="fr"
        selectable
        editable
        scrollTimeReset={false}
        events={[]}
        dateClick={() => {}}
        select={() => {}}
        eventClick={() => {}}
        eventResize={() => {}}
        eventDrop={() => {}}
        height="100%"
        allDaySlot={false} />
    </div>
  )
}

Calendar.defaultProps = {
  height: 400
}

Calendar.propTypes = {

}

export default Calendar;