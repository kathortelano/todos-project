export const data = [
    {
        id: 1,
        title: 'Night time routine', //max-length: 50 chars
        tags: ["night", "routine", "sleep"], //max length: 10 tags;
        reports: [{
            char: 29,
            title: 'Inappropriate',
            body: "There are swear words all over this.", // 300 chars
            createdAt: Date.now(),
        }], // depending on reports, but if reaching 10 any delete, if inappropriate 5x then delete
        tasks: [
            {
                todo: "Wash face with water",
                completed: true,
            }, 
            {
                todo: 'Wash face with cleanser',
                completed: false,
            },
        ], // no max array length
        createAt: Date.now(),
        shares: 5,
        likes: 100,
        used: 10, //
    },
    {
        id: 2,
        title: 'Day time routine', //max-length: 50 chars
        tags: ["day", "routine", "morning"], //max length: 10 tags;
        reports: [], // depending on reports, but if reaching 10 any delete, if inappropriate 5x then delete
        tasks: [
            {
                todo: "Wash face with water",
                completed: true,
            }, 
            {
                todo: 'Wash face with cleanser',
                completed: false,
            },
            {
                todo: 'Dry face',
                completed: false,
            },
        ], // no max array length
        createAt: Date.now(),
        shares: 1,
        likes: 10,
        used: 5, //interact with, at least touched checkboxes
    },
    {
        id: 3,
        title: 'Assignments for school', //max-length: 50 chars
        tags: ["study", "school", "work"], //max length: 10 tags;
        reports: [
        {
            char: 29,
            title: 'Inappropriate',
            body: "There are swear words all over this.", // 300 chars
            createdAt: Date.now(),
        },
        {
            char: 29,
            title: 'Inappropriate',
            body: "There are sexual content on this", // 300 chars
            createdAt: Date.now(),
        },
        {
            char: 29,
            title: 'Inappropriate',
            body: "There racial tones and comments", // 300 chars
            createdAt: Date.now(),
        }
    ], // depending on reports, but if reaching 10 any delete, if inappropriate 5x then delete
        tasks: [
            {
                todo: "Nap for 20 minutes",
                completed: true,
            }, 
            {
                todo: 'Research about jellyfishes',
                completed: false,
            },
            {
                todo: 'Write paper about jellyfishes',
                completed: false,
            },
            {
                todo: 'Math assignments',
                completed: false,
            },
            {
                todo: 'History Research',
                completed: false,
            },
        ], // no max array length
        createAt: Date.now(),
        shares: 6,
        likes: 7,
        used: 20, //
    },
];