<template>
    <!-- nav -->
    <Nave1 />
    <!-- banner -->
    <div class="banner">
        <div></div>
        <h1>إدارة الأملاك</h1>
    </div>
    <!-- board property managment -->
    <div class="board">
        <div class="head">
            <h1>لوحه إدارة الأملاك</h1>
            <a href="#">جميع المخططات</a>
        </div>
        <div class="cards">
            <!-- card 1 -->
            <div class="card" :class="{ active: activeCardIndex === 0 }" @click="setActiveCard(0)">
                <h2>الاملاك</h2>
                <div class="chart">
                    <DonutChart1 />
                </div>
                <p>الوحدات : 205</p>
                <div class="inf">
                    <div>
                        <div style="background-color: #FF7043;"></div>
                        <p>محجوز</p>
                    </div>
                    <div>
                        <div style="background-color: #81C784;"></div>
                        <p>متاح</p>
                    </div>
                    <div>
                        <div style="background-color: #4FC3F7;"></div>
                        <p>مؤجر</p>
                    </div>
                </div>
            </div>
            <!-- card 2 -->
            <div class="card" :class="{ active: activeCardIndex === 1 }" @click="setActiveCard(1)">
                <h2>الدفعيات</h2>
                <div class="chart">
                    <DonutChart2 />
                </div>
                <p>اجمالي مبلغ الدفعات : 100,600 رس</p>
                <div class="inf">
                    <div>
                        <div style="background-color: #FF7043;"></div>
                        <p>القادم</p>
                    </div>
                    <div>
                        <div style="background-color: #81C784;"></div>
                        <p>السابق</p>
                    </div>
                </div>
            </div>
            <!-- card 3 -->
            <div class="card" :class="{ active: activeCardIndex === 2 }" @click="setActiveCard(2)">
                <h2>الاقساط</h2>
                <div class="chart">
                    <DonutChart3 />
                </div>
                <p>اجمالي مبلغ الأقساط : 100,600 رس</p>
                <div class="inf">
                    <div>
                        <div style="background-color: #FF7043;"></div>
                        <p>المتأخر</p>
                    </div>
                    <div>
                        <div style="background-color: #81C784;"></div>
                        <p>المستحق</p>
                    </div>
                    <div>
                        <div style="background-color: #4FC3F7;"></div>
                        <p>المتحصل</p>
                    </div>
                </div>
            </div>
            <!-- card 4 -->
            <div class="card" :class="{ active: activeCardIndex === 3 }" @click="setActiveCard(3)">
                <h2>الصيانات</h2>
                <div class="chart">
                    <DonutChart4 />
                </div>
                <p>اجمالي مبلغ الصيانات : 100,600 رس</p>
                <div class="inf">
                    <div>
                        <div style="background-color: #FF7043;"></div>
                        <p>مبني 1</p>
                    </div>
                    <div>
                        <div style="background-color: #81C784;"></div>
                        <p>مبني 2</p>
                    </div>
                    <div>
                        <div style="background-color:  #4FC3F7;"></div>
                        <p>مبني 3</p>
                    </div>
                </div>
            </div>
            <!-- card 5 -->
            <div class="card" :class="{ active: activeCardIndex === 4 }" @click="setActiveCard(4)">
                <h2>الموافقات</h2>
                <div class="chart">
                    <DonutChart5 />
                </div>
                <p>اجمالي الموافقات : 61</p>
                <div class="inf">
                    <div>
                        <div style="background-color: #FF4906;"></div>
                        <p>بحاجه لتتعميد الصيانات</p>
                    </div>
                    <div>
                        <div style="background-color: #A1DC67;"></div>
                        <p>بحاجه لتتعميد فواتير</p>
                    </div>
                    <div>
                        <div style="background-color: #39CEF3;"></div>
                        <p>تم التعميد صيانات</p>
                    </div>
                    <div>
                        <div style="background-color: #576AD5;"></div>
                        <p>تم التعميد فواتير</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- properties -->
    <div class="propertis" v-show="activeCardIndex === 0">
        <div class="head">
            <h1>الأملاك (المباني)</h1>
            <div class="search">
                <div class="inputS" style="border: 1px solid #aaa;">
                    <input type="search" placeholder="إسم المبني">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div>
                    <button @click="toggle1" :style="Style1">مباني</button>
                    <button @click="toggle2" :style="Style2">وحدات</button>
                </div>
                <button class="s">بحث</button>
            </div>
        </div>
        <div class="buildings">
            <div class="cards">
                <!-- card 1 -->
                <div class="card">
                    <img src="../images/auctions.png" alt="building">
                    <div class="data">
                        <h2>مبنى في مكة المكرمة</h2>
                        <h5><i class="fa-solid fa-location-dot"></i> مكة المكرمة</h5>
                        <span class="status" v-if="stu">متاحة</span>
                        <div class="inf">
                            <p><span>عدد الوحدات :</span> 8 وحدات</p>
                            <p><span>الوحدات المتاحة للإيجار :</span> 8 وحدات</p>
                            <p><span>الوحدات المؤجرة :</span> 10 وحدات</p>
                            <p><span>اجمالي دفعيات للمباني :</span> 10 وحدات</p>
                            <button>التفاصيل</button>
                        </div>
                    </div>
                </div>
                <!-- card 2 -->
                <div class="card">
                    <img src="../images/auctions.png" alt="building">
                    <div class="data">
                        <h2>مبنى في مكة المكرمة</h2>
                        <h5><i class="fa-solid fa-location-dot"></i> مكة المكرمة</h5>
                        <span class="status B" v-if="stu">مؤجرة</span>
                        <div class="inf">
                            <p><span>عدد الوحدات :</span> 8 وحدات</p>
                            <p><span>الوحدات المتاحة للإيجار :</span> 8 وحدات</p>
                            <p><span>الوحدات المؤجرة :</span> 10 وحدات</p>
                            <p><span>اجمالي دفعيات للمباني :</span> 10 وحدات</p>
                            <button>التفاصيل</button>
                        </div>
                    </div>
                </div>
                <!-- card 3 -->
                <div class="card">
                    <img src="../images/auctions.png" alt="building">
                    <div class="data">
                        <h2>مبنى في مكة المكرمة</h2>
                        <h5><i class="fa-solid fa-location-dot"></i> مكة المكرمة</h5>
                        <span class="status B" v-if="stu">مؤجرة</span>
                        <div class="inf">
                            <p><span>عدد الوحدات :</span> 8 وحدات</p>
                            <p><span>الوحدات المتاحة للإيجار :</span> 8 وحدات</p>
                            <p><span>الوحدات المؤجرة :</span> 10 وحدات</p>
                            <p><span>اجمالي دفعيات للمباني :</span> 10 وحدات</p>
                            <button>التفاصيل</button>
                        </div>
                    </div>
                </div>
                <!-- card 4 -->
                <div class="card">
                    <img src="../images/auctions.png" alt="building">
                    <div class="data">
                        <h2>مبنى في مكة المكرمة</h2>
                        <h5><i class="fa-solid fa-location-dot"></i> مكة المكرمة</h5>
                        <span class="status" v-if="stu">متاحة</span>
                        <div class="inf">
                            <p><span>عدد الوحدات :</span> 8 وحدات</p>
                            <p><span>الوحدات المتاحة للإيجار :</span> 8 وحدات</p>
                            <p><span>الوحدات المؤجرة :</span> 10 وحدات</p>
                            <p><span>اجمالي دفعيات للمباني :</span> 10 وحدات</p>
                            <button>التفاصيل</button>
                        </div>
                    </div>
                </div>
                <!-- card 5 -->
                <div class="card">
                    <img src="../images/auctions.png" alt="building">
                    <div class="data">
                        <h2>مبنى في مكة المكرمة</h2>
                        <h5><i class="fa-solid fa-location-dot"></i> مكة المكرمة</h5>
                        <span class="status" v-if="stu">متاحة</span>
                        <div class="inf">
                            <p><span>عدد الوحدات :</span> 8 وحدات</p>
                            <p><span>الوحدات المتاحة للإيجار :</span> 8 وحدات</p>
                            <p><span>الوحدات المؤجرة :</span> 10 وحدات</p>
                            <p><span>اجمالي دفعيات للمباني :</span> 10 وحدات</p>
                            <button>التفاصيل</button>
                        </div>
                    </div>
                </div>
                <!-- card 6 -->
                <div class="card">
                    <img src="../images/auctions.png" alt="building">
                    <div class="data">
                        <h2>مبنى في مكة المكرمة</h2>
                        <h5><i class="fa-solid fa-location-dot"></i> مكة المكرمة</h5>
                        <span class="status B" v-if="stu">مؤجرة</span>
                        <div class="inf">
                            <p><span>عدد الوحدات :</span> 8 وحدات</p>
                            <p><span>الوحدات المتاحة للإيجار :</span> 8 وحدات</p>
                            <p><span>الوحدات المؤجرة :</span> 10 وحدات</p>
                            <p><span>اجمالي دفعيات للمباني :</span> 10 وحدات</p>
                            <button>التفاصيل</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="arows">
                <div id="a"><i class="fa-solid fa-arrow-right"></i></div>
                <div>4</div>
                <div>3</div>
                <div>2</div>
                <div id="ac">1</div>
                <div><i class="fa-solid fa-arrow-left"></i></div>
            </div>
        </div>
    </div>
    <!-- payments -->
    <div class="payments" v-show="activeCardIndex === 1">
        <div class="head">
            <h1>الدفعيات القادمه</h1>
            <div class="search">
                <div class="inputS" style="border: 1px solid #aaa;">
                    <input type="search" placeholder="إسم المبني">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>

                <div>
                    <button @click="toggle1" :style="Style1">قادمه</button>
                    <button @click="toggle2" :style="Style2">سابقه</button>
                </div>
                <button class="s">بحث</button>
            </div>
        </div>
        <div>
            <!-- table 1 -->
            <table v-if="btn">
                <thead>
                    <tr>
                        <th v-for="col in columns" :key="col">{{ col }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
                        <td v-for="(col, colIndex) in columns" :key="colIndex"
                            :class="[{ 'td1': colIndex === 0 }, { 'td6': colIndex === 5 }]">
                            {{ colIndex === 0 ? "الدفعيه الاولي" : `${colIndex === 1 ? "1-7-2024" : `${colIndex === 2 ?
                                "10,000ر.س" : `${colIndex === 3 ? "10,000ر.س" : `${colIndex === 4 ? "10,000ر.س" :
                                    `${colIndex === 5 ? "30,000ر.س" : `eror`}`}`}`}`}` }}
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- table 2 -->
            <table v-if="!btn">
                <thead>
                    <tr>
                        <th v-for="col in columns2" :key="col">{{ col }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, rowIndex) in rows2" :key="rowIndex">
                        <td v-for="(col, colIndex) in columns2" :key="colIndex"
                            :class="[{ 'td1': colIndex === 0 }, { 'td62': colIndex === 5 }]">
                            <span v-html="colIndex === 0 ? 'الدفعيه الاولي' : ''"></span>
                            <span v-html="colIndex === 1 ? '1-7-2024' : ''"></span>
                            <span v-html="colIndex === 2 ? '10,000ر.س' : ''"></span>
                            <span v-html="colIndex === 3 ? 'VISA' : ''"></span>
                            <span v-html="colIndex === 4 ? 'مدفوعات ملحقه بالمبني....الخ' : ''"></span>
                            <span v-html="colIndex === 5 ? 'تحميل' : ''"></span>

                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <!-- Installments -->
    <div class="Installments" v-show="activeCardIndex === 2">
        <div class="head">
            <h1>الاقساط المستحقه</h1>
            <div class="search">
                <div class="inputS" style="border: 1px solid #aaa;">
                    <input type="search" placeholder="إسم المبني">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div>
                    <button @click="toggle1" :style="Style1">مستحقه</button>
                    <button @click="toggle2" :style="Style2">متوقعه</button>
                </div>
                <button class="s">بحث</button>
            </div>
        </div>
        <div>
            <!-- table 1 -->
            <table v-if="btn">
                <thead>
                    <tr>
                        <th v-for="col in columns3" :key="col">{{ col }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, rowIndex) in rows3" :key="rowIndex">
                        <td v-for="(col, colIndex) in columns3" :key="colIndex"
                            :class="[{ 'td2': colIndex === 0 }, { 'td63': colIndex === 3 }]">
                            {{ colIndex === 0 ? `القسط ${rowIndex + 1}` : `${colIndex === 1 ? '1-8-2024' : `${colIndex
                                === 2 ?
                                "10,000ر.س" : ``}`}` }}
                            <span>{{ colIndex === 3 ? 'مستحقة الدفع' : '' }}</span>

                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- table 2 -->
            <table v-if="!btn">
                <thead>
                    <tr>
                        <th v-for="col in columns3" :key="col">{{ col }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, rowIndex) in rows3" :key="rowIndex">
                        <td v-for="(col, colIndex) in columns3" :key="colIndex"
                            :class="[{ 'td2': colIndex === 0 }, { 'td63': colIndex === 3 }]">
                            {{ colIndex === 0 ? `القسط ${rowIndex + 1}` : `${colIndex === 1 ? '1-8-2024' : `${colIndex
                                === 2 ?
                                "10,000ر.س" : ``}`}` }}
                            <span class="think">{{ colIndex === 3 ? 'متوقعه' : '' }}</span>

                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="arows">
            <div id="a"><i class="fa-solid fa-arrow-right"></i></div>
            <div>4</div>
            <div>3</div>
            <div>2</div>
            <div id="ac">1</div>
            <div><i class="fa-solid fa-arrow-left"></i></div>
        </div>
    </div>
    <!-- Maintenance -->
    <div class="Maintenance" v-show="activeCardIndex === 3">
        <div class="head">
            <h1>الصيانات</h1>
            <div class="search">
                <div class="inputS" style="border: 1px solid #aaa;">
                    <input type="search" placeholder="إسم المبني">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div>
                    <select name="Maintenance">
                        <option value="building">مبني</option>
                    </select>
                </div>
                <button class="s">بحث</button>
            </div>
        </div>
        <div class="buildings">
            <div class="cards">
                <!-- card 1 -->
                <div class="card">
                    <img src="../images/auctions.png" alt="building">
                    <div class="data">
                        <h2>مبنى في مكة المكرمة</h2>
                        <h5><i class="fa-solid fa-location-dot"></i> مكة المكرمة</h5>
                        <div class="inf">
                            <p><span> عدد الصيانات :</span> 8 صيانات</p>
                            <p><span>قيمه الصيانات للمبني :</span> 8000 صيانات</p>
                            <button>التفاصيل</button>
                        </div>
                    </div>
                </div>
                <!-- card 2 -->
                <div class="card">
                    <img src="../images/auctions.png" alt="building">
                    <div class="data">
                        <h2>مبنى في مكة المكرمة</h2>
                        <h5><i class="fa-solid fa-location-dot"></i> مكة المكرمة</h5>
                        <div class="inf">
                            <p><span> عدد الصيانات :</span> 8 صيانات</p>
                            <p><span>قيمه الصيانات للمبني :</span> 8000 صيانات</p>
                            <button>التفاصيل</button>
                        </div>
                    </div>
                </div>
                <!-- card 3 -->
                <div class="card">
                    <img src="../images/auctions.png" alt="building">
                    <div class="data">
                        <h2>مبنى في مكة المكرمة</h2>
                        <h5><i class="fa-solid fa-location-dot"></i> مكة المكرمة</h5>
                        <div class="inf">
                            <p><span> عدد الصيانات :</span> 8 صيانات</p>
                            <p><span>قيمه الصيانات للمبني :</span> 8000 صيانات</p>
                            <button>التفاصيل</button>
                        </div>
                    </div>
                </div>
                <!-- card 4 -->
                <div class="card">
                    <img src="../images/auctions.png" alt="building">
                    <div class="data">
                        <h2>مبنى في مكة المكرمة</h2>
                        <h5><i class="fa-solid fa-location-dot"></i> مكة المكرمة</h5>
                        <div class="inf">
                            <p><span> عدد الصيانات :</span> 8 صيانات</p>
                            <p><span>قيمه الصيانات للمبني :</span> 8000 صيانات</p>
                            <button>التفاصيل</button>
                        </div>
                    </div>
                </div>
                <!-- card 5 -->
                <div class="card">
                    <img src="../images/auctions.png" alt="building">
                    <div class="data">
                        <h2>مبنى في مكة المكرمة</h2>
                        <h5><i class="fa-solid fa-location-dot"></i> مكة المكرمة</h5>
                        <div class="inf">
                            <p><span> عدد الصيانات :</span> 8 صيانات</p>
                            <p><span>قيمه الصيانات للمبني :</span> 8000 صيانات</p>
                            <button>التفاصيل</button>
                        </div>
                    </div>
                </div>
                <!-- card 6 -->
                <div class="card">
                    <img src="../images/auctions.png" alt="building">
                    <div class="data">
                        <h2>مبنى في مكة المكرمة</h2>
                        <h5><i class="fa-solid fa-location-dot"></i> مكة المكرمة</h5>
                        <div class="inf">
                            <p><span> عدد الصيانات :</span> 8 صيانات</p>
                            <p><span>قيمه الصيانات للمبني :</span> 8000 صيانات</p>
                            <button>التفاصيل</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="arows">
                <div id="a"><i class="fa-solid fa-arrow-right"></i></div>
                <div>4</div>
                <div>3</div>
                <div>2</div>
                <div id="ac">1</div>
                <div><i class="fa-solid fa-arrow-left"></i></div>
            </div>
        </div>
    </div>
    <div class="Approvals" v-show="activeCardIndex === 4">
        <div class="head">
            <h1>الموافقات</h1>
            <div class="search">
                <div class="inputS" style="border: 1px solid #aaa;">
                    <input type="search" placeholder="إسم المبني">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <button class="s">بحث</button>
            </div>
        </div>
        <div class="buildings">
            <div class="cards">
                <div class="card">
                    <img src="../images/auctions.png" alt="building">
                    <div class="data">
                        <h2>الصيانه</h2>
                        <h5><i class="fa-solid fa-location-dot"></i> مكة المكرمة</h5>
                        <span class="status" v-if="stu">متاحة</span>
                        <div class="inf">
                            <p><span>عدد الموافقات تحت التعميد :</span> 8 موافقات</p>
                            <p><span>عدد الموافقات اللي تمت :</span> 8 موافقات</p>
                            <p><span>عدد الموافقات التي بحاجه للتعميد :</span> 8 موافقات</p>
                            <p><span>قيمه الموافقات :</span> 1000ريال</p>
                            <button>التفاصيل</button>
                        </div>
                    </div>
                </div>
                <!-- card 2 -->
                <div class="card">
                    <img src="../images/auctions.png" alt="building">
                    <div class="data">
                        <h2>الفواتير</h2>
                        <h5><i class="fa-solid fa-location-dot"></i> مكة المكرمة</h5>
                        <span class="status B" v-if="stu">مؤجرة</span>
                        <div class="inf">
                            <p><span>عدد الموافقات تحت التعميد :</span> 8 موافقات</p>
                            <p><span>عدد الموافقات اللي تمت :</span> 8 موافقات</p>
                            <p><span>عدد الموافقات التي بحاجه للتعميد :</span> 8 موافقات</p>
                            <p><span>قيمه الموافقات :</span> 1000ريال</p>
                            <button>التفاصيل</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>

<script>
import Nave1 from "../components/Nave1.vue";
import Footer from "../components/Footer.vue";
import DonutChart1 from "../components/DonutChart1.vue";
import DonutChart2 from "../components/DonutChart2.vue";
import DonutChart3 from "../components/DonutChart3.vue";
import DonutChart4 from "../components/DonutChart4.vue";
import DonutChart5 from "../components/DonutChart5.vue";

export default {
    components: {
        Nave1,
        Footer,
        DonutChart1,
        DonutChart2,
        DonutChart3,
        DonutChart4,
        DonutChart5,
    },
    data() {
        return {
            stu: false,
            btn: true,
            activeCardIndex: 0,
            columns: ['الأقساط', 'التاريخ', 'الاقساط المتحصله بعد اخر دفعيه', 'قيمه الصيانه بعد اخر دفعيه', 'قيمه العموله ', 'قيمه الدفعيه'],
            rows: Array.from({ length: 18 }),
            columns2: ['الأقساط', 'التاريخ', 'قيمه الدفعيه', 'طريقه الدفع', 'تفاصيل المبلغ المدفوع', 'تحكم'],
            rows2: Array.from({ length: 18 }),
            columns3: ['الأقساط', 'تاريخ الإستحقاق', 'المبلغ', 'الحالة'],
            rows3: Array.from({ length: 18 }),
        };
    },
    computed: {
        Style1() {
            return {
                background: this.stu ? 'white' : '#AA1E22',
                color: this.stu ? ' #aaa' : 'white',
            }
        },
        Style2() {
            return {
                background: this.stu ? '#AA1E22' : 'white',
                color: this.stu ? 'white' : '#aaa',
            }
        }
    },
    methods: {
        setActiveCard(index) {
            this.activeCardIndex = index;
        },
        toggle1() {
            this.stu = false
            this.btn = true
        },
        toggle2() {
            this.stu = true
            this.btn = false
        },
    }
};
</script>

<style>
/* Main Css*/
* {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    list-style: none;
}


:root {
    --textColor: #AA1E22;
}

button {
    clip-path: polygon(2% 0%, 100% 0%, 100% 100%, 0% 100%);
}

.banner {
    background-image: url("../images/breadcrumb.png");
    height: 25vh;
    position: relative;
}

.banner h1 {
    position: absolute;
    color: white;
    font-size: 2.5rem;
    right: 8%;
    top: calc(25vh/3);
}

.banner div {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: .4;
}

/* board */

.board {
    margin: 20px 2rem;
}

.board .head {
    display: flex;
    /* flex-direction: column; */
    justify-content: space-between;
}

.board .head h1 {
    font-size: 2rem;
    font-weight: bold;
}

.board .head a {
    color: var(--textColor);
    text-decoration: underline;
    font-weight: bold;
    font-size: 1rem;
    margin-top: 20px;
}

/* board cards */
.cards {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.cards .card {
    background-color: white;
    padding: 15px;
    padding-bottom: 20px;
    cursor: pointer;
    filter: grayscale(100%);
    transition: filter .5s;
}

.cards .card:hover {
    filter: grayscale(0%);
}

.cards .active {
    filter: grayscale(0%);
}

.cards .card .chart {
    display: flex;
    justify-content: center;
    align-items: center;
}

.cards .card .chart div {
    width: 65% !important;
    margin: 20px 0;
}

.cards .card .data {
    position: relative;
}

.cards .card .data .status {
    position: absolute;
    font-size: .7rem;
    color: darkgreen;
    background-color: rgb(215, 239, 215);
    padding: 4px 8px;
    border-radius: 4px;
    top: 20px;
    left: 15px;
}

.cards .card .data .B {
    color: darkred;
    background-color: rgb(246, 206, 206);
}

.cards .card h2 {
    font-size: 1.5rem;
    font-weight: bold;
    height: 15%;
    margin-right: 10px;
}



.cards .card p {
    font-weight: 650;
    margin-top: 40px;
}

.cards .card .inf {
    margin-top: 25px;
    height: 70px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    margin-bottom: 20px;
}

.cards .card .inf div {
    display: flex;
    justify-content: start;
    align-items: center;
}

.cards .card .inf div div {
    width: 10px;
    height: 10px;
    background-color: #AA1E22;
}

.cards .card .inf div p {
    margin: 0 10px 0 0;
    font-size: 0.8rem;
    font-weight: bold;
}
</style>

<style>
/* propertis */
.propertis {
    margin: 50px 2rem;
}

.head h1 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 15px;
}

.head .search {
    display: flex;
    justify-content: start;
    align-items: center;
    height: 60px;
    gap: 25px;
}

.head .search .inputS input {
    height: 70%;
    width: 85%;
    padding: 10px 15px;
    font-size: 0.9rem;
    opacity: .6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 10px;
    outline: none;
    box-shadow: none;
}

.head .search div {
    width: 35%;
    display: flex;
    justify-content: start;
    align-items: center;
    background-color: white;
    height: 70%;
    border-radius: 10px;
}

.head .search div button {
    height: 100%;
    width: 50%;
    transition: background-color .5s;
    clip-path: polygon(2% 0%, 100% 0%, 100% 100%, 0% 100%);
}

button:hover {
    background-color: silver !important;
}

.head .search .s {
    width: 11%;
    margin-right: 17%;
    background-color: #AA1E22;
    height: 70%;
    color: white;
}

.propertis .cards {
    margin-top: 10px;
}

.propertis .cards .card {
    padding: 10px 0px;
    filter: grayscale(0%);
    cursor: auto;
}

.propertis .cards .card img {
    width: 100%;
}

.propertis .cards .card h2 {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 17px 10px;
    height: auto;
}

.propertis .cards .card h5 {
    font-size: .8rem;
    background-color: cadetblue;
    padding: 3px;
    width: fit-content;
    border-radius: 5px;
    color: white;
    margin-right: 20px;
}

.propertis .cards .card .inf {
    margin-top: 0;
    gap: 0;
    display: flex;
    flex-direction: column;
    height: auto;
    margin-right: 10px;
}

.propertis .cards .card .inf p {
    margin-top: 20px;
    font-size: .8rem;
    color: #aaa;
}

.propertis .cards .card .inf p span {
    color: black;
}

.propertis .cards .card .inf button {
    margin-top: 30px;
    background-color: cadetblue;
    padding: 10px 0px;
    color: white;
    transition: background-color .5s;
}

.arows {
    display: flex;
    width: 100%;
    height: 100px;
    justify-content: center;
    column-gap: 15px;
    align-items: center;
}

.arows div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #aaa;
    height: 40px;
    width: 40px;
    color: black;
}

.arows div i {
    color: white;
}

.arows #a {
    background-color: cadetblue;
}

.arows #ac {
    background-color: transparent;
    border: 2px solid cadetblue;
    color: cadetblue;
}

/* media */

@media (max-width: 995px) {
    .cards {
        grid-template-columns: repeat(2, 1fr);
    }

    p {
        font-size: .8rem;
    }

    h1 {
        font-size: 1.6rem !important;
    }

    h2 {
        font-size: 1.35rem !important;
    }

    .arows div {
        height: 30px;
        width: 30px;
        font-size: .8rem;
    }
}

@media (max-width: 585px) {
    .cards {
        grid-template-columns: repeat(1, 1fr);
    }

    .arows div {
        height: 20px;
        width: 20px;
    }

    p {
        font-size: .5rem;
    }

    h1 {
        font-size: 1rem !important;
    }

    h2 {
        font-size: .9rem !important;
    }

    a {
        font-size: .7rem !important;
    }

    button {
        font-size: .7rem;
    }

    search {
        font-size: .7rem !important;
    }
}
</style>

<style>
/* payments */

table {
    width: calc(100% - 4rem);
    font-size: .7rem;
    margin: 20px 2rem 15vh;
    background-color: white;
}

th,
td {
    border-bottom: .5px solid #aaaaaa62;
    padding: 13px;
    text-align: start !important;
}

th {
    color: #AA1E22;
    font-weight: bold;
    font-size: .8rem;
}

.td1,
.td2 {
    font-weight: bold;
    font-size: .8rem;
}

.td6 {
    font-weight: bold;
    color: green;
    font-size: .8rem;
}

.td62 {
    font-weight: bold;
    color: green;
    font-size: .8rem;
    text-decoration: underline;
    cursor: pointer;
}

.td62::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    background: url("../images/pdf.png");
    margin-right: 5px;
}

.td2 {
    width: 50%;
}

.td63 span {
    width: fit-content;
    color: darkred;
    background-color: rgb(255, 215, 215);
    border-radius: 5px;
    padding: 3px 5px;
    font-size: .5rem;
}

.td63 .think {
    color: darkgreen;
    background-color: rgb(190, 233, 190);
}

.Installments table {
    margin-bottom: 20px;
}

@media (max-width: 860px) {
    table {
        font-size: .4rem;
    }

    td {
        padding: 9px;
    }

    th {
        font-size: .5rem;
    }

    .td1,
    .td2 {
        font-size: .5rem;
    }

    .td6 {
        font-size: .5rem;
    }

    .td62,
    .td63 {
        font-size: .5rem;
    }
}
</style>

<style>
/* Maintenance */

.Maintenance {
    margin: 50px 2rem;
}

.head h1 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 15px;
}

.head .search {
    display: flex;
    justify-content: start;
    align-items: center;
    height: 60px;
    gap: 25px;
}

.head .search search {
    height: 70%;
    width: 30%;
    border: 1px solid black;
    padding: 10px 15px;
    font-size: 0.9rem;
    opacity: .6;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.head .search div {
    width: 35%;
    background-color: transparent;
    height: 70%;
    border-radius: 10px;
}

.head .search div select {
    height: 100%;
    min-width: 20%;
    background-color: #F1F1F1;
    padding: 5px 10px;
    border-radius: 10px;
}

.head .search .s {
    width: 11%;
    margin-right: 17%;
    background-color: #AA1E22;
    height: 70%;
    color: white;
}

.Maintenance .cards {
    margin-top: 10px;
}

.Maintenance .cards .card {
    padding: 10px 0px;
    filter: grayscale(0%);
    cursor: auto;
}

.Maintenance .cards .card img {
    width: 100%;
}

.Maintenance .cards .card h2 {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 17px 10px;
    height: auto;
}

.Maintenance .cards .card h5 {
    font-size: .8rem;
    background-color: cadetblue;
    padding: 3px;
    width: fit-content;
    border-radius: 5px;
    color: white;
    margin-right: 20px;
}

.Maintenance .cards .card .inf {
    margin-top: 0;
    gap: 0;
    display: flex;
    flex-direction: column;
    height: auto;
    margin-right: 10px;
}

.Maintenance .cards .card .inf p {
    margin-top: 20px;
    font-size: .8rem;
    color: #aaa;
}

.Maintenance .cards .card .inf p span {
    color: black;
}

.Maintenance .cards .card .inf button {
    margin-top: 30px;
    background-color: cadetblue;
    padding: 10px 0px;
    color: white;
    transition: background-color .5s;
}
</style>

<style>
/* Approvals */

.Approvals .head h1 {
    margin-right: 2rem;
}

.Approvals .head .search {
    display: flex;
    justify-content: space-between;
    margin: 0 2rem;
}

.Approvals .cards {
    margin: 10px 2rem 80px;
    grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 650px) {
    .Approvals .cards {
        grid-template-columns: repeat(1, 1fr);
    }
}

.Approvals .cards .card {
    padding: 10px 0px;
    filter: grayscale(0%);
    cursor: auto;
}

.Approvals .cards .card img {
    width: 100%;
}

.Approvals .cards .card h2 {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 17px 10px;
    height: auto;
}

.Approvals .cards .card h5 {
    font-size: .8rem;
    background-color: cadetblue;
    padding: 3px;
    width: fit-content;
    border-radius: 5px;
    color: white;
    margin-right: 20px;
}

.Approvals .cards .card .inf {
    margin-top: 0;
    gap: 0;
    display: flex;
    flex-direction: column;
    height: auto;
    margin-right: 10px;
}

.Approvals .cards .card .inf p {
    margin-top: 20px;
    font-size: .8rem;
    color: #aaa;
    display: flex;
    justify-content: space-between;
}

.Approvals .cards .card .inf p span {
    color: black;
}

.Approvals .cards .card .inf button {
    margin-top: 30px;
    background-color: cadetblue;
    padding: 10px 0px;
    color: white;
    transition: background-color .5s;
    /* clip-path: polygon(2% 0%, 100% 0%, 100% 100%, 0% 100%); */
}
</style>