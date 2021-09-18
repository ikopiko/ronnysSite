<template>
<div id="invoice-site">
    <center id="top">
        <div class="logo"></div>
        <div class="info">
            <h2>Ronnyspizza</h2>
        </div>
        <!--End Info-->
    </center>
    <!--End InvoiceTop-->

    <div id="mid">
        <div class="info">
            <h2>Contact Info</h2>
            <p>
                Address : 215 Nutsunidze str.<br>
                Email : levan.andguladze@gmail.com<br>
                Phone : +995 577 230988<br>
            </p>
        </div>
    </div>
    <!--End Invoice Mid-->

    <div id="bot">
        <div id="table">
            <v-simple-table>
                <tbody>
                    <tr>
                        <td colspan="3" class="tableitem">
                            <span class="itemtext">
                                <Full style="display: inline; width:18px;" />
                                <span class="fullName"> Papa Ronny / Supreme</span>
                            </span>
                            <div>
                                <ul>
                                    <li class="default">
                                        <span>Less sause</span>
                                    </li>
                                    <li class="topping">
                                        <span class="toppingName">+ Extra cheese</span>
                                        <span class="toppingPrice">+ 4.8 <small>₾</small></span>
                                    </li>
                                    <li class="halfLeft">
                                        <HalfLeft />
                                        <span class="halfLeftName">Papa Ronny</span>
                                        <span class="halfLeftPrice">17.05 <small>₾</small></span>
                                    </li>
                                    <li class="topping">
                                        <span class="toppingName">+ Extra cheese</span>
                                        <span class="toppingPrice">+ 4.8 <small>₾</small></span>
                                    </li>
                                    <li class="halfRight">
                                        <HalfRight />
                                        <span class="halfRightName">Supreme</span>
                                        <span class="halfRightPrice">22.80 <small>₾</small></span>
                                    </li>
                                    <li class="default">
                                        <span>No mushrooms</span>
                                    </li>
                                    <li class="topping">
                                        <span class="toppingName">+ Extra sssss</span>
                                        <span class="toppingPrice">+ 4.8 <small>₾</small></span>
                                    </li>
                                    <li class="topping">
                                        <span class="toppingName">+ Extra sssss</span>
                                        <span class="toppingPrice">+ 4.8 <small>₾</small></span>
                                    </li>
                                </ul>
                                <ul>
                                    <li class="noSvg">
                                        <span class="noSvgtName">Cookie</span>
                                        <span class="noSvgPrice">5.40 <small>₾</small></span>
                                    </li>
                                    <li class="topping">
                                        <span class="fullPrice  mr-24">
                                            <Add class="w-24" /> 3x
                                            <Remove class="w-24" /></span>
                                    </li>
                                </ul>

                                <ul>
                                    <li class="noSvg">
                                        <span class="noSvgtName">Cherry cola</span>
                                        <span class="noSvgPrice">6.70</span>
                                    </li>
                                    <li class="discount">
                                        <span class="discountName green">15% discount</span>
                                        <span class="discountPrice green">1.70</span>
                                    </li>
                                    <li class="topping">
                                        <span class="fullPrice  mr-24">
                                            <Add class="w-24" /> 1x
                                            <Remove class="w-24" /></span>
                                    </li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </v-simple-table>
            <v-simple-table>
                <tr>
                    <td>
                        <ul>
                            <li class="delivery">
                                <span class="deliveryName">Delivery in Vake </span>
                                <span class="deliveryPrice">1.70</span>
                            </li>
                        </ul>
                    </td>
                </tr>
            </v-simple-table>
            <v-simple-table>
                <tr>
                    <td>
                        <ul>
                            <li class="noSvg">
                                <span class="noSvgtName">Total</span>
                                <span class="noSvgPrice">6.70</span>
                            </li>
                        </ul>
                    </td>
                </tr>
            </v-simple-table>
        </div>
        <!--End Table-->
        <div id="legalcopy">
            <p class="legal"><strong>Thank you for your business!</strong>  Payment is expected within 31 days; please process this invoice within that time. There will be a 5% interest charge per month on late invoices.
            </p>
        </div>
    </div>
    <!--End InvoiceBot-->
</div>
</template>

<script>
import Add from '../../assets/img/add-ronnyspizza-pizza.svg';
import Remove from '../../assets/img/remove-ronnyspizza-pizza.svg';
import Full from '../../assets/img/full.svg';
import HalfLeft from '../../assets/img/halfLeft.svg';
import HalfRight from '../../assets/img/halfright.svg';
export default {
    components: {
        Add,
        Remove,
        Full,
        HalfLeft,
        HalfRight,
    },
}
</script>