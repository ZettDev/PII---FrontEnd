$(document).ready(function () {
    $('#calendar').evoCalendar({
        'theme': 'Midnight Blue',
        'language': 'pt',
        'todayHighlight': true,
    })
})

$(document).ready(function () {
    $('#calendar').evoCalendar('addCalendarEvent', [
        {
            name: 'Nome do Evento 1',
            date: 'December 10, 2023',
            type: 'event',
            description: 'Explicações do Evento 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
        },
        {
            name: 'Nome do Evento 2',
            badge: "Evento de 5 dias",
            date: ['December/18/2023', 'December/22/2023'],
            type: 'birthday',
            description: 'Explicações do Evento 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aliquid animi deleniti ducimus incidunt ipsum iure maiores natus nulla officia pariatur, qui quisquam quod repellat similique sit vitae.',
        },

        {
            name: 'Nome do Evento 3',
            date: 'December 25, 2023',
            type: 'event',
            description: 'Explicações do Evento 3: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            name: 'Nome do Evento 4',
            date: 'December 25, 2023',
            type: 'holiday',
            description: 'Explicações do Evento 4: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, autem consequuntur dicta ea facilis ipsam natus porro quis ratione repellat sed temporibus voluptate voluptatum. Corporis fugiat optio quaerat quisquam sunt.',
        },
    ]);
})