<script lang="ts">
  import { Datepicker } from 'svelte-calendar';
  import date from "./utils/date";
  const tableHeads = ['index', '이름','입사일', '남은 연차', '총 연차', '사용 연차', '사용 일']
  const tableDefaultBody = [{index: 1, name: '김승원', date: '2022-08-17', remain: 0, total: 0, used:0, usedDate: 'none'}]
  const me = tableDefaultBody[0]

  let isModalOn = false
  let classification = 0
  let selectedClassification = 0

  const handleModalOn = () => {
    isModalOn = !isModalOn
  }

  const handleClassifyCation = (index) => {
    classification = index
    selectedClassification = index
  }
  me.total = date.workingMonth(me.date)


  // 1년 이하: 입사일 17일 인 경우 다음달 17일 부터 매 달 17일 마다 연차 1개씩 발생
  //  12월 까지 총 11개
  // 1년 초과: 근무 기간 1년 초과된 시점에 연간 80% 이상 출근에 15일 발생
</script>

<main>
  <section>
    <div>TODAY: {date.getNowDate()}</div>

    <table>
      <thead>
        <tr>
          {#each tableHeads as th}
            <th>{th}</th>
          {/each}
        </tr>
      </thead>
      <tbody>
        <tr>
          {#each tableDefaultBody as td}
            <td>{td.index}</td>
            <td>{td.name}</td>
            <td>{td.date}</td>
            <td>{td.remain}</td>
            <td>{td.total}</td>
            <td>{td.used}</td>
            <td>{td.usedDate}</td>
            <div>
              <button on:click={handleModalOn}>{isModalOn ? '추가 완료' : '추가'}</button>
            </div>
          {/each}
        </tr>
      </tbody>
    </table>
    {#if isModalOn}
      <div class="backdrop" class:promo={true}>
        <div class="modal">
          <div>
            <Datepicker start={date.getNow()} />
            <div style="margin-top: 18px">
              {#each ['연차', '반차'] as item, index}
                <button style={ `background: ${selectedClassification === index ? 'black' : 'gray'}`}
                  on:click={() => handleClassifyCation(index)}
                >{item}</button>
              {/each}
            </div>
        </div>
          <div style="margin-top: 6px"><button>사용하기</button></div>
        </div>
      </div>
    {/if}
  </section>
</main>

<style>
    .modal {
        padding: 10px;
        border-radius: 10px;
        max-width: 400px;
        margin: 10% auto;
        text-align: center;
        background: white;
    }

    .promo .modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: crimson;
        color: white;
    }
</style>
