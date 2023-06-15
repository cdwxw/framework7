<template>
  <f7-page class="page-home" @page:afterin="onPageAfterIn">
    <f7-navbar large transparent :sliding="false">
      <f7-nav-left>
        <f7-link
          panel-open="left"
          icon-ios="f7:menu"
          icon-aurora="f7:menu"
          icon-md="material:menu"
        ></f7-link>
      </f7-nav-left>
      <f7-nav-title sliding>System Architecture Design</f7-nav-title>
      <f7-nav-right>
        <f7-link
          class="searchbar-enable"
          data-searchbar=".searchbar-components"
          icon-ios="f7:search"
          icon-aurora="f7:search"
          icon-md="material:search"
        ></f7-link>
      </f7-nav-right>
      <f7-nav-title-large>System Architecture Design</f7-nav-title-large>
      <f7-searchbar
        class="searchbar-components"
        search-container=".components-list"
        search-in="a"
        expandable
        :disable-button="!theme.aurora"
      ></f7-searchbar>
    </f7-navbar>

    <f7-list class="searchbar-hide-on-search">
      <f7-list-item title="About Framework7" reload-detail link="/about/">
        <template #media>
          <f7-icon f7="house" color="blue"></f7-icon>
        </template>
      </f7-list-item>
    </f7-list>

    <f7-block-title medium class="searchbar-found">系统架构设计师</f7-block-title>
    <f7-list accordion-list class="components-list searchbar-found">
      <f7-list-item accordion-item title="计算机系统基础知识">
        <template #media>
          <f7-icon f7="folder_fill_badge_plus" color="blue"></f7-icon>
        </template>
        <f7-accordion-content>
          <f7-list>
            <f7-list-item reload-detail link="/1036/" title="1036_计算机系统基础">
              <template #media>
                <f7-icon f7="doc_on_clipboard_fill" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/1037/" title="1037_操作系统">
              <template #media>
                <f7-icon f7="doc_on_clipboard_fill" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/1038/" title="1038_计算机网络">
              <template #media>
                <f7-icon f7="doc_on_clipboard_fill" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/1039/" title="1039_数据库基础">
              <template #media>
                <f7-icon f7="doc_on_clipboard_fill" color="blue"></f7-icon>
              </template>
            </f7-list-item>
          </f7-list>
        </f7-accordion-content>
      </f7-list-item>
      <f7-list-item accordion-item title="系统架构专业知识">
        <template #media>
          <f7-icon f7="folder_fill_badge_plus" color="blue"></f7-icon>
        </template>
        <f7-accordion-content>
          <f7-list>
            <f7-list-item reload-detail link="/1040/" title="1040_软件开发与管理">
              <template #media>
                <f7-icon f7="doc_on_clipboard_fill" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/1041/" title="1041_系统分析与设计">
              <template #media>
                <f7-icon f7="doc_on_clipboard_fill" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/1042/" title="1042_系统架构与集成技术">
              <template #media>
                <f7-icon f7="doc_on_clipboard_fill" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/1043/" title="1043_系统设计与架构">
              <template #media>
                <f7-icon f7="doc_on_clipboard_fill" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/1044/" title="1044_系统安全与可靠性设计">
              <template #media>
                <f7-icon f7="doc_on_clipboard_fill" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/1045/" title="1045_系统测试与运行维护">
              <template #media>
                <f7-icon f7="doc_on_clipboard_fill" color="blue"></f7-icon>
              </template>
            </f7-list-item>
          </f7-list>
        </f7-accordion-content>
      </f7-list-item>
      <f7-list-item accordion-item title="补充知识">
        <template #media>
          <f7-icon f7="folder_fill_badge_plus" color="blue"></f7-icon>
        </template>
        <f7-accordion-content>
          <f7-list>
            <f7-list-item reload-detail link="/1046/" title="1046_应用数学">
              <template #media>
                <f7-icon f7="doc_on_clipboard_fill" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/1047/" title="1047_知识产权">
              <template #media>
                <f7-icon f7="doc_on_clipboard_fill" color="blue"></f7-icon>
              </template>
            </f7-list-item>
          </f7-list>
        </f7-accordion-content>
      </f7-list-item>
      <f7-list-item accordion-item title="案例分析">
        <template #media>
          <f7-icon f7="folder_fill_badge_plus" color="blue"></f7-icon>
        </template>
        <f7-accordion-content>
          <f7-list>
            <f7-list-item reload-detail link="/1669/" title="1669_案例分析">
              <template #media>
                <f7-icon f7="doc_on_clipboard_fill" color="blue"></f7-icon>
              </template>
            </f7-list-item>
          </f7-list>
        </f7-accordion-content>
      </f7-list-item>
      <f7-list-item accordion-item title="论文">
        <template #media>
          <f7-icon f7="folder_fill_badge_plus" color="blue"></f7-icon>
        </template>
        <f7-accordion-content>
          <f7-list>
            <f7-list-item reload-detail link="/1791/" title="1791_论文">
              <template #media>
                <f7-icon f7="doc_on_clipboard_fill" color="blue"></f7-icon>
              </template>
            </f7-list-item>
          </f7-list>
        </f7-accordion-content>
      </f7-list-item>
      <f7-list-item accordion-item title="Components">
        <template #media>
          <f7-icon f7="folder_badge_plus" color="blue"></f7-icon>
        </template>
        <f7-accordion-content>
          <f7-list>
            <f7-list-item reload-detail link="/accordion/" title="Accordion">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/action-sheet/" title="Action Sheet">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/appbar/" title="Appbar">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/area-chart/" title="Area Chart">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/autocomplete/" title="Autocomplete">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/badge/" title="Badge">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/breadcrumbs/" title="Breadcrumbs">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/buttons/" title="Buttons">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/calendar/" title="Calendar / Date Picker">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/cards/" title="Cards">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/cards-expandable/" title="Cards Expandable">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/checkbox/" title="Checkbox">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/chips/" title="Chips/Tags">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/color-picker/" title="Color Picker">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/contacts-list/" title="Contacts List">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/content-block/" title="Content Block">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/data-table/" title="Data Table">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/dialog/" title="Dialog">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/elevation/" title="Elevation">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/fab/" title="FAB">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/fab-morph/" title="FAB Morph">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/form-storage/" title="Form Storage">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/gauge/" title="Gauge">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/grid/" title="Grid / Layout Grid">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/icons/" title="Icons">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/infinite-scroll/" title="Infinite Scroll">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/inputs/" title="Inputs">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/lazy-load/" title="Lazy Load">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/list/" title="List View">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/list-index/" title="List Index">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/login-screen/" title="Login Screen">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/menu/" title="Menu">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/menu-list/" title="Menu List">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/messages/" title="Messages">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/navbar/" title="Navbar">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/notifications/" title="Notifications">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/panel/" title="Panel / Side Panels">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/photo-browser/" title="Photo Browser">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/picker/" title="Picker">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/pie-chart/" title="Pie Chart">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/popover/" title="Popover">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/popup/" title="Popup">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/preloader/" title="Preloader">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/progressbar/" title="Progress Bar">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/pull-to-refresh/" title="Pull To Refresh">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/radio/" title="Radio">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/range/" title="Range Slider">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/searchbar/" title="Searchbar">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/searchbar-expandable/" title="Searchbar Expandable">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/sheet-modal/" title="Sheet Modal">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/skeleton/" title="Skeleton (Ghost) Elements">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/smart-select/" title="Smart Select">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/sortable/" title="Sortable List">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/stepper/" title="Stepper">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/subnavbar/" title="Subnavbar">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/swipeout/" title="Swipeout (Swipe To Delete)">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/swiper/" title="Swiper Slider">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/tabs/" title="Tabs">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/text-editor/" title="Text Editor">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/timeline/" title="Timeline">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/toast/" title="Toast">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/toggle/" title="Toggle">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/toolbar-tabbar/" title="Toolbar & Tabbar">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/tooltip/" title="Tooltip">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/treeview/" title="Treeview">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
            <f7-list-item reload-detail link="/virtual-list/" title="Virtual List">
              <template #media>
                <f7-icon f7="text_badge_checkmark" color="blue"></f7-icon>
              </template>
            </f7-list-item>
          </f7-list>
        </f7-accordion-content>
      </f7-list-item>
    </f7-list>
    <f7-list class="searchbar-not-found">
      <f7-list-item title="Nothing found" />
    </f7-list>
    <f7-block-title medium class="searchbar-hide-on-search">Themes</f7-block-title>
    <f7-list class="searchbar-hide-on-search">
      <f7-list-item title="iOS Theme" external link="./index.html?theme=ios" />
      <f7-list-item title="Material (MD) Theme" external link="./index.html?theme=md" />
      <f7-list-item title="Aurora Desktop Theme" external link="./index.html?theme=aurora" />
      <f7-list-item title="Color Themes" reload-detail link="/color-themes/" />
    </f7-list>

    <f7-block-title medium class="searchbar-hide-on-search">Page Loaders & Router</f7-block-title>
    <f7-list class="searchbar-hide-on-search">
      <f7-list-item title="Page Transitions" reload-detail link="/page-transitions/" />
      <f7-list-item title="Routable Modals" reload-detail link="/routable-modals/" />
      <f7-list-item
        title="Default Route (404)"
        reload-detail
        link="/load-something-that-doesnt-exist/"
      />
      <f7-list-item
        v-if="!theme.aurora"
        title="Master-Detail (Split View)"
        link="/master-detail/"
      />
      <f7-list-item title="Store" reload-detail link="/store/" />
    </f7-list>
  </f7-page>
</template>
<script>
import {
  f7Page,
  f7Navbar,
  f7NavLeft,
  f7NavTitle,
  f7NavTitleLarge,
  f7NavRight,
  f7BlockTitle,
  f7AccordionContent,
  f7List,
  f7ListItem,
  f7Link,
  f7Searchbar,
  f7Icon,
  theme,
  f7,
} from 'framework7-vue';
import { onMounted } from 'vue';

export default {
  components: {
    f7Page,
    f7Navbar,
    f7NavLeft,
    f7NavTitle,
    f7NavTitleLarge,
    f7NavRight,
    f7BlockTitle,
    f7AccordionContent,
    f7List,
    f7ListItem,
    f7Link,
    f7Searchbar,
    f7Icon,
  },
  props: {
    f7router: Object,
  },
  // eslint-disable-next-line
  setup({ f7router }) {
    const onResize = () => {
      const $el = f7.$('.page-home');
      if (f7.width >= 768) {
        $el.find('.list:not(.searchbar-not-found)').addClass('menu-list');
      } else {
        $el.find('.list:not(.searchbar-not-found)').removeClass('menu-list');
      }
    };

    const onPageAfterIn = () => {
      if (!theme.aurora) return;
      if (f7.width >= 768) {
        f7router.navigate('/about/', { reloadDetail: true });
      }
    };
    onMounted(() => {
      if (theme.aurora) {
        const $el = f7.$('.page-home');
        onResize();

        f7.on('resize', onResize);

        f7router.on('routeChange', (route) => {
          const url = route.url;
          if (!$el) return;
          const $linkEl = $el.find(`a[href="${url}"]`);
          if (!$linkEl.length) return;
          $el.find('.item-selected').removeClass('item-selected');
          $linkEl.addClass('item-selected');
        });
      }
    });
    return {
      theme,
      onPageAfterIn,
    };
  },
};
</script>
