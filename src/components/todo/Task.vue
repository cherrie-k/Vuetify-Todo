<template>
  <div>
    <v-list-item
      @click="$store.dispatch('doneTask', task.id)"
      :class="{
        'red lighten-5':
          task.done /* task.done이 true일 때만 red property를 가짐*/,
      }"
    >
      <!--v-slot:default로 컨텐트 분배를 위한 slot 정의함. 
        이 slot의 이름은 'default'로 하고, 이건 'active'라는 프로퍼티를 가진 data object 받음-->
      <template v-slot:default>
        <v-list-item-action>
          <!--:input-value 속성이 true일 때 체크함-->
          <v-checkbox
            :input-value="task.done"
            color="red lighten-2"
          ></v-checkbox>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title
            :class="{ 'text-decoration-line-through': task.done }"
            >{{ task.title }}</v-list-item-title
          >
        </v-list-item-content>
        <v-list-item-action v-if="task.dueDate">
          <v-list-item-action-text>
            <v-icon small>mdi-calendar</v-icon>
            {{ task.dueDate | niceDate }}
          </v-list-item-action-text>
        </v-list-item-action>
        <v-list-item-action>
          <!--클릭 됐을 때 deleteTask라는 action 수행
           <v-bt @click.stop="dialogs.delete = true" icon>
            <v-icon color="red lighten-3">mdi-delete</v-icon>
          </v-bt>
          -->
          <task-menu :task="task" />
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
import { format } from "date-fns";

export default {
  // 부모 컴포넌트로부터 props를 array로 받음
  props: ["task"],
  filters: {
    niceDate(value) {
      return format(new Date(value), "MMM d");
    },
  },
  components: {
    "task-menu": require("@/components/todo/TaskMenu.vue").default,
  },
};
</script>
DialogDelete
