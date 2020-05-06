<template>
    <a-table
        :columns="columns"
        :dataSource="data"
        :pagination="pagination"
        :rowKey="rowKey"
        size="small"
    ></a-table>
</template>

<script>
import axios from "axios";
export default {
    name: "HelloWorld",
    props: {
        msg: String
    },
    data() {
        return {
            data: [],
            newData: [],
            columns: [
                {
                    title: "光缆名称",
                    dataIndex: "opticalCableName",
                    scopedSlots: {
                        customRender: "opticalCableName"
                    }
                },
                {
                    title: "始端局站名称",
                    dataIndex: "siteName"
                },
                {
                    title: "地市",
                    dataIndex: "disMarket"
                },
                {
                    title: "区县",
                    dataIndex: "county"
                },
                {
                    title: "资源总量",
                    dataIndex: "CensusNum"
                },
                {
                    title: "已普查量",
                    dataIndex: "CensusEdNum"
                },
                {
                    title: "提交时间",
                    dataIndex: "reportDate"
                },
                {
                    title: "普查状态",
                    dataIndex: "status"
                },
                {
                    title: "审核状态",
                    dataIndex: "zgStatus"
                },
                {
                    title: "同步次数",
                    dataIndex: "synSum",
                    scopedSlots: {
                        customRender: "synSum"
                    }
                },
                {
                    title: "留言日志",
                    dataIndex: "x",
                    fixed: "right",
                    width: 150,
                    scopedSlots: {
                        customRender: "message"
                    }
                },
                {
                    title: "操作",
                    dataIndex: "y",
                    fixed: "right",
                    width: 80,
                    scopedSlots: {
                        customRender: "action"
                    }
                }
            ],
            pageSize: 5,
            currentPage: 1,
            pagination: {
                total: 0,
                current: 1,
                pageSize: 5,
                pageSizeOptions: ["5", "10", "15", "20"],
                showTotal: () => `共 ${this.pagination.total} 条数据`,
                showSizeChanger: true,
                onChange: page => {
                    this.currentPage = page;
                    this.pagination.current = this.currentPage;
                    this.query();
                },
                onShowSizeChange: (current, pageSize) => {
                    this.currentPage = current; // 监听currentpage，防止在切换分页（少==>多）时查询有问题
                    this.pageSize = pageSize;
                    this.pagination.pageSize = pageSize;
                    this.query();
                }
            },
            rowKey: record => record.ROW_ID
        };
    },
    mounted() {
        axios.get("http://localhost:8000/json/newData.json").then(x => { // 这里和访问地址对应
            this.newData = x.data.list;
            this.query();
        });
    },
    methods: {
        query() {
            this.pagination.total = this.newData.length;
            // chunk(a,b) 将数组拆分为a以每组b个拆分为新数组数列
            this.data = this._.chunk(this.newData, this.pageSize)[
                this.currentPage - 1
            ];
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>