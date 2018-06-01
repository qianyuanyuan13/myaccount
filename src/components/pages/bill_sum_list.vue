<template>
<div class="bill">
	<el-row class="top" :gutter="24">
		<!-- 支付渠道 -->
		<span>支付渠道</span>
			<el-select v-model="formInline.region" placeholder="全部">
			<el-option label="中金" value="zhongjing"></el-option>
			<el-option label="邮箱" value="youxiang"></el-option>
			<el-option label="联通" value="liantong"></el-option>
		</el-select>
		<!-- 日期选择初始 -->
		<div class="block">
			<span class="demonstration">交易日期（始）：</span>
			<el-date-picker
				v-model="formInline.value1"
				type="date"
				placeholder="选择日期">
			</el-date-picker>
		</div>
		<div class="block">
			<span class="demonstration">交易日期（至）：</span>
			<el-date-picker
				v-model="formInline.value2"
				type="date"
				placeholder="选择日期">
			</el-date-picker>
		</div>
		<el-button type="primary" @click="onSubmit">查询</el-button>
	</el-row>
	<!-- 下方表格 -->	
		<el-row class="table-container" :gutter="24">
			<el-table
				:data="tableData"
				stripe
				border
				style="width: 100%">
				<el-table-column
				prop="channel"
				label="支付渠道"
				width="180">
				</el-table-column>
				<el-table-column
				prop="sell_date"
				label="交易日期"
				width="180">
				</el-table-column>
				<el-table-column
				prop="trans_number"
				label="交易笔数">
				</el-table-column>
				<el-table-column
				prop="hang_number"
				label="挂账笔数">
				</el-table-column>
				<el-table-column
				prop="hang_dec"
				label="挂账说明">
				</el-table-column>
				<el-table-column
				prop="account_time"
				label="对账操作时间">
				</el-table-column>
				<el-table-column
				prop="auditor"
				label="审核人">
				</el-table-column>
				<el-table-column
				prop="audit_time"
				label="审核时间">
				</el-table-column>
				<el-table-column
				prop="audit_status"
				label="对账状态">
					<template slot-scope="scope">
						<span v-if="1==scope.row.status">待审核</span>
					</template>
				</el-table-column>
				<el-table-column
				prop="operation"
				label="操作">
				<template slot-scope="scope">
					<el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
					<el-button type="text" size="small">审核通过</el-button>
				</template>
				</el-table-column>
			</el-table>
		</el-row>
		<div class="block pages">
			<!-- <span class="demonstration">完整功能</span> -->
			<el-pagination
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
				:current-page="currentPage"
				:page-sizes="[10, 20, 30, 40]"
				:page-size="10"
				layout="total, sizes, prev, pager, next, jumper"
				:total="40">
			</el-pagination>
  	</div>

	</div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: "",
        value1: "",
        value2: ""
      },
      tableData: [
        {
          channel: "联通",
          sell_date: "2012-2-22",
          trans_number: "222222",
          hang_number: "3333",
          hang_dec: "未知",
          account_time: "2012-2-22",
          auditor: "UFO",
          audit_time: "2012-2-22",
          audit_status: "待审核",
					operation: "",
        }
			],
			currentPage:1
    };
  },
  methods: {
    onSubmit() {
      console.log("已提交");
		},
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`);
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
		},
		handleClick(){
			console.log('查看详情');
			this.$router.push('/bill/detail');
		}
  }
};
</script>
<style lang="less">
.top {
  // padding-top:20px;
  padding: 15px;
}
.block {
  display: inline;
}
//表头颜色
.el-table thead {
  color: #909399;
}
.el-table th {
  background-color: #e1e1e1 !important;
}
.el-table .cell {
  text-align: center;
}
.block.pages {
	text-align: right;
}
.el-pagination{
	padding: 15px 30px;
}
</style>


