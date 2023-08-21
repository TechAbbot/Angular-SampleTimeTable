import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid'
import * as moment from 'moment';
import { TimeTableService } from 'src/app/services/time-table.service';

@Component({
  selector: 'app-calender-table',
  templateUrl: './calender-table.component.html',
  styleUrls: ['./calender-table.component.scss']
})
export class CalenderTableComponent implements OnInit {
  eventData: any[] = [];
  calendarEvents: any;

  calendarOptions: CalendarOptions = {
    plugins: [timeGridPlugin],
    initialView: 'timeGridWeek',
    slotLabelFormat: { hour: '2-digit', minute: '2-digit', meridiem: 'short' }
  };

  constructor(private timeTableService: TimeTableService) { }

  ngOnInit(): void {
    this.getData()
  }

  // To fetch the json data from external json file 
  getData(): void {
    this.eventData = [];
    this.timeTableService.getData().subscribe((response) => {
      this.eventData = response;
      this.updateCalendarEvents();
    });
  }

  updateCalendarEvents() {
    this.calendarEvents = this.eventData.map(event => ({
      title: event.display_value.toString(), // Display custom data as title
      start: this.formatDate(event.date_time),
      extendedProps: {
        display_value: event.display_value,
      },
    }));
  }

  customEventRender = (info: any) => {
    const customData = info.event.extendedProps.display_value;
    const eventEl = info.el;

    // Customize how the event is displayed
    eventEl.querySelector('.fc-title').textContent = customData;
  };

  formatDate(date: string): string {
    return moment(date).utc().format('YYYY-MM-DD HH:mm'); // Format the date
  }
}
