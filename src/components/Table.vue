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
                <td class="text-stroke font-semibold text-sm inline-flex">Transaction Type</td>
                <td class="text-right font-semibold">{{ transactionType }}</td>                
            </tr>
            <tr>
                <td class="text-stroke font-semibold">Date</td>
                <td class="text-right font-semibold">{{ date }}</td>                
            </tr>
            <tr>
                <td class="text-stroke font-semibold">Amount</td>
                <td class="text-right font-semibold">₦{{ amount }}</td>
            </tr>
            <tr>
                <td class="text-stroke font-semibold">Phone number</td>
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
    props: ['transactionType', 'date', 'amount', 'phoneNumber', 'network'],
    
}
</script>