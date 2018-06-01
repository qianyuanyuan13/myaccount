<template>
  <div id="billDetail">
    <el-row>
      <!-- 选择时间 -->
      <div class="mycell">
        <span>交易时间段：</span>
        <el-time-picker
          is-range
          v-model="value4"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          placeholder="选择时间范围">
        </el-time-picker>
      </div>
      <div class="mycell">
        <span>中城加以类型：</span>
        <el-select v-model="region" placeholder="全部">
        <el-option label="中金" value="zhongjing"></el-option>
        <el-option label="邮箱" value="youxiang"></el-option>
        <el-option label="联通" value="liantong"></el-option>
        </el-select>
      </div>
      <div class="mycell">
        <span>交易对账状态：</span>
        <el-select v-model="region" placeholder="全部">
        <el-option label="中金" value="zhongjing"></el-option>
        <el-option label="邮箱" value="youxiang"></el-option>
        <el-option label="联通" value="liantong"></el-option>
        </el-select>
      </div>
    </el-row>
    <el-row>
      <div class="mycell num">
        <span>渠道交易批次号:</span>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <span>中城交易流水号:</span>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <span>中城交易订单号:</span>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </div>
    </el-row>
    <!-- 下方表格 -->	
		<el-row class="table-container">
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
  data(){
    return{
      value4:'',
      region:'',
      input:''
    }
  }
}
</script>
<style lang="less">
#billDetail{
  padding-top:15px;
}
  .mycell{
    display:inline;
  }
  .num .el-input{
    width:180px;
  }
  .el-row{
    padding-bottom:15px;
  }
  .block.pages {
	text-align: right;
  }
  .el-pagination{
	padding: 15px 30px;
  }
  
</style>


