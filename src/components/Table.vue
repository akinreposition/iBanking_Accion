<template>
    <table class="table-auto border-separate border-spacing-3 text-xs gap-6 ">
        <!-- <thead>
            <tr>
                <th>Transaction Type</th>
                <th>Date</th>
                <th>Year</th>
            </tr>
        </thead> -->
        <tbody>
            <tr v-for="data in transaction" :key="data.label">
                <td class="text-stroke font-semibold text-xs inline-flex">{{ data.label }}</td>
                <td class="text-right font-semibold">{{ data.value }}</td>                
            </tr>
            
        </tbody>
    </table>
</template>

<script lang="ts">
export default {
    name: 'Table',
    props: [ 'transaction'],
    
    
}
</script>