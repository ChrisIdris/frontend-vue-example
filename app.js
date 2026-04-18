Vue.createApp({

    data() {
        return {
            // Counter
            count: 0,

            //Number list
            numbers: [],

            // Todos
            newTodo: "",
            filter: "all",
            todos: [
                { text: "Learn HTML & CSS", done: true },
                { text: "Learn JavaScript", done: true },
                { text: "Learn Vue.js", done: false },
                { text: "Build the student dashboard", done: false }
            ]
        };
    },

    computed: { 
        doubleCount() {
            return this.count * 2;
        },
        tripleCount() {
            return this.count * 3;
        },
        remainingCount() {
            return this.todos.filter(t => !t.done).length;
        },

        filteredTodos() {
            if (this.filter === "active") return this.todos.filter(t => !t.done);
            if (this.filter === "done") return this.todos.filter(t => t.done);
            return this.todos;
        }
    },

    methods: {
        // Counter
        increment() {
            this.count++;
        },
        saveNumber() {
            this.numbers.push(this.count);
        },

        reset() {
            this.count = 0;
        },

        // Todos
        addTodo() {
            if (this.newTodo.trim()) {
                this.todos.push({ text: this.newTodo, done: false });
                this.newTodo = "";
            }
        },

        removeTodo(index) {
            this.todos.splice(index, 1);
        },

        clearDone() {
            this.todos = this.todos.filter(t => !t.done);
        }
    }

}).mount("#app");
