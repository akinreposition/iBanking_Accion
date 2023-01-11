<template>
    <table class="table-auto border-separate border-spacing-3 text-sm gap-6 ">
        <!-- <thead>
            <tr>
                <th>Transaction Type</th>
                <th>Date</th>
                <th>Year</th>
            </tr>
        </thead> -->
        <tbody>
            <tr class="">
                <td class="text-stroke font-semibold text-sm inline-flex">{{ labelTransactionType }}</td>
                <td class="text-right font-semibold">{{ transactionType }}</td>                
            </tr>
            <tr>
                <td class="text-stroke font-semibold">{{ labelDate }}</td>
                <td class="text-right font-semibold">{{ date }}</td>                
            </tr>
            <tr>
                <td class="text-stroke font-semibold">{{ labelAmount }}</td>
                <td class="text-right font-semibold">₦{{ amount }}</td>
            </tr>
            <tr>
                <td class="text-stroke font-semibold">{{ labelPhoneNumber }}</td>
                <td class="text-right font-semibold">{{ phoneNumber }}</td>
            </tr>
            <tr>
                <td class="text-stroke font-semibold">Network</td>
                <td class="text-right font-semibold">{{ network }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
export default {
    name: 'Table',
    props: [ 'labelTransactionType', 'transactionType', 'labelDate', 'date', 'labelAmount', 'amount', 'labelPhoneNumber', 'phoneNumber', 'network'],
    
}
</script>