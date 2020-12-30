export default {
    server: {
        host: 'https://brainstorm-interview-task.herokuapp.com/',
        headers: {
            'Content-Type': 'application/json',
        },
        routes: {
            usersGetByPaginate: "users?",//_page=1&_limit=10
            usersGetAll: "users",
            toggleSwitch: "users",
            userCreate: "users",
            userUpadate: "users",
            userGetById: "users/",
            userDeleteById: "users/",
            deleteUser: "users/",

        },
    },
}