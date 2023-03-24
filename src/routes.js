const routes = [
    {
      method: 'POST',
      path: '/notes',
      handler: addNoteHandler,
    },
    {
      method: 'GET',
      path: '/notes',
      handler: () => {},
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
     },
];

const getAllNotesHandler = () => ({
    status: 'success',
    data: {
      notes,
    },
});

const { addNoteHandler, getAllNotesHandler } = require('./handler');