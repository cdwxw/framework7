<template>
  <f7-page
    @page:init="onPageInit"
    @page:beforeremove="onPageBeforeRemove"
    @page:beforeout="onPageBeforeOut"
  >
    <f7-navbar back-link="Back" title="1036_计算机系统基础">
      <f7-nav-right>
        <f7-link
          class="searchbar-enable"
          data-searchbar=".searchbar-demo"
          icon-ios="f7:search"
          icon-md="material:search"
          icon-aurora="f7:search"
        />
      </f7-nav-right>
      <f7-searchbar
        class="searchbar-demo"
        expandable
        search-container=".search-list"
        search-in=".card"
        :disable-button="!theme.aurora"
      />
    </f7-navbar>
    <f7-list class="searchbar-not-found">
      <f7-list-item title="Nothing found" />
    </f7-list>
    <f7-list media-list class="search-list searchbar-found">
      <f7-list-item v-for="(item, index) in items" :key="index">
        <f7-card style="background-color: #efefef">
          <f7-card-header v-html="replaceTitle(item, index)"></f7-card-header>
          <f7-card-content>
            <div v-for="(o, i) in item.option" :key="i">
              <span v-if="i === 0" style="font-size: 14px"
                ><f7-chip outline text="A"></f7-chip>{{ replaceOption(o) }}</span
              >
              <span v-else-if="i === 1" style="font-size: 14px"
                ><f7-chip outline text="B"></f7-chip>{{ replaceOption(o) }}</span
              >
              <span v-else-if="i === 2" style="font-size: 14px"
                ><f7-chip outline text="C"></f7-chip>{{ replaceOption(o) }}</span
              >
              <span v-else-if="i === 3" style="font-size: 14px"
                ><f7-chip outline text="D"></f7-chip>{{ replaceOption(o) }}</span
              >
              <span v-else-if="i === 4" style="font-size: 14px"
                ><f7-chip outline text="E"></f7-chip>{{ replaceOption(o) }}</span
              >
              <span v-else-if="i === 5" style="font-size: 14px"
                ><f7-chip outline text="F"></f7-chip>{{ replaceOption(o) }}</span
              >
              <span v-else-if="i === 6" style="font-size: 14px"
                ><f7-chip outline text="G"></f7-chip>{{ replaceOption(o) }}</span
              >
            </div>
          </f7-card-content>
          <f7-card-footer>
            <f7-link @click="showAnalyze(item.answer.join(''), item.analyze)">解析</f7-link>
          </f7-card-footer>
        </f7-card>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
import {
  f7,
  f7Card,
  f7CardContent,
  f7CardFooter,
  f7CardHeader,
  f7Link,
  f7List,
  f7ListItem,
  f7Navbar,
  f7NavRight,
  f7Page,
  f7Searchbar,
  f7Chip,
  theme,
} from 'framework7-vue';
import $ from 'dom7';

export default {
  components: {
    f7Page,
    f7Navbar,
    f7NavRight,
    f7Searchbar,
    f7List,
    f7ListItem,
    f7Card,
    f7CardHeader,
    f7CardContent,
    f7CardFooter,
    f7Link,
    f7Chip,
  },
  data() {
    return {
      theme,
      items: [],
    };
  },
  methods: {
    showAnalyze(answer, analyze) {
      const self = this;
      // Create sheet modal
      self.sheet = f7.sheet.create({
        content: `
            <div class="sheet-modal sheet-modal-bottom" style="height:300px;">
              <div class="toolbar">
                <div class="toolbar-inner justify-content-flex-end">
                  <a href="#" class="link sheet-close">Close</a>
                </div>
              </div>
              <div class="sheet-modal-inner">
                <div class="page-content">
                  <div class="block">
                    <p><b>【答案】</b></p>${self.replaceOption(answer)}
                    <p><b>【解析】</b></p>${self.replaceOption(analyze)}
                  </div>
                </div>
              </div>
            </div>
          `.trim(),
      });
      // Close inline sheet
      if ($('.modal-in').length > 0) f7.sheet.close('.modal-in');
      // Open it
      self.sheet.open();
    },
    replaceTitle(item, index) {
      let chip;
      switch (Number(item.question_type)) {
        case 1:
        case 9:
          chip = `<div class="chip chip-outline color-blue"><div class="chip-label">【单选题】${
            index + 1
          }.</div></div>`;
          break;
        case 8:
          chip = `<div class="chip chip-outline color-teal"><div class="chip-label">【完形填空题】${
            index + 1
          }.</div></div>`;
          break;
        case 5:
        case 14:
          chip = `<div class="chip chip-outline color-orange"><div class="chip-label">【问答题】${
            index + 1
          }.</div></div>`;
          break;
        default:
          chip = `<div class="chip chip-outline color-lightblue"><div class="chip-label">【${
            item.question_type
          }】${index + 1}.</div></div>`;
          break;
      }
      return `<b>${chip}${item.question_title
        .replaceAll('://s2.', '://s1.')
        .replaceAll('&nbsp;', ' ')}</b>`;
    },
    replaceOption(option) {
      return `${option.replaceAll('://s2.', '://s1.').replaceAll('&nbsp;', ' ')}`;
    },
    onPageInit() {
      const self = this;
      f7.request({
        url: './sad/1036_计算机系统基础.json',
        method: 'GET',
        dataType: 'json',
        success(ret) {
          // Render items by passing array with result items
          self.items = ret.data.data.question;
        },
      });
    },
    onPageBeforeOut() {
      f7.notification.close();
      // Close opened sheets on page out
      f7.sheet.close();
    },
    onPageBeforeRemove() {
      const self = this;
      // Destroy toasts when page removed
      if (self.notificationWithButton) self.notificationWithButton.destroy();
      // Destroy sheet modal when page removed
      if (self.sheet) self.sheet.destroy();
    },
  },
};
</script>
