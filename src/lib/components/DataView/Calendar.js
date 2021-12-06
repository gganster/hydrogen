
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import frLocale from '@fullcalendar/core/locales/fr';
import interactionPlugin from "@fullcalendar/interaction"

const Calendar = (props) => {
  const {
    className,
    style,
    events, //mandatories: {title:string, start:jsDate, end:jsDate, extendedProps:object}
    onResize,
    onDrop,
    onEventClick,
    onDateSelect,
    height
  } = props;

  return (
    <div className={`${className} ${onEventClick ? "calendar_event_pointer" : ""}`}
         style={{height, ...style}}>
      <FullCalendar
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
        ]}
        initialView="timeGridWeek"
        locales={[frLocale]}
        locale="fr"
        height="100%"
        allDaySlot={false}
        scrollTimeReset={false}

        selectable={onDateSelect}
        editable={onResize && onDrop}
        disableResize={true}
        events={events ?? []}
        select={onDateSelect}
        eventClick={onEventClick}
        eventResize={onResize}
        eventDrop={onDrop}
      />
    </div>
  )
}

Calendar.defaultProps = {
  height: 400
}

Calendar.propTypes = {

}

export default Calendar;