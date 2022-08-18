<template>
    <div>
        <h1>New Header</h1>
        <ul v-for="student in studentProps" :key="student">
            <li>{{student}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props : {
        studentProps : {
            type :Array
        }
    }
}
</script>