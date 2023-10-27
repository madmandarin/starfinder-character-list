<template>
  <div class="weapons">
    <cl-main-label class="label">{{ $t('weapons') }}</cl-main-label>
    <div class="col">
      <div class="weapon">
        <div class="area name">
          <div class="label">{{ $t('weapons') }}</div>
          <cl-text-input border-less size="tiny"/>
        </div>
        <div class="area level">
          <div class="label">{{ $t('level') }}</div>
          <cl-text-input border-less size="tiny"/>
        </div>
        <div class="area attack-mod">
          <div class="label">{{ $t('mod-attack') }}</div>
          <cl-text-input border-less size="tiny"/>
        </div>
        <div class="area damage">
          <div class="label">{{ $t('demage') }}</div>
          <cl-text-input border-less size="tiny"/>
        </div>
        <div class="area critical">
          <div class="label">{{ $t('critical') }}</div>
          <cl-text-input border-less size="tiny"/>
        </div>
        <div class="area distance">
          <div class="label">{{ $t('distance') }}</div>
          <cl-text-input border-less size="tiny"/>
        </div>
        <div class="area type">
          <div class="label">{{ $t('type') }}</div>
          <cl-text-input border-less size="tiny"/>
        </div>
        <div class="area ammo">
          <div class="label">{{ $t('ammo') }}</div>
          <cl-text-input border-less size="tiny"/>
        </div>
        <div class="area property">
          <div class="label">{{ $t('specific-properties') }}</div>
          <cl-text-input border-less size="tiny"/>
        </div>
      </div>
      <div class="weapon">
        <div class="area name">
          <div class="label">{{ $t('weapons') }}</div>
          <cl-text-input border-less size="tiny"/>
        </div>
        <div class="area level">
          <div class="label">{{ $t('level') }}</div>
          <cl-text-input border-less size="tiny"/>
        </div>
        <div class="area attack-mod">
          <div class="label">{{ $t('mod-attack') }}</div>
          <cl-text-input border-less size="tiny"/>
        </div>
        <div class="area damage">
          <div class="label">{{ $t('demage') }}</div>
          <cl-text-input border-less size="tiny"/>
        </div>
        <div class="area critical">
          <div class="label">{{ $t('critical') }}</div>
          <cl-text-input border-less size="tiny"/>
        </div>
        <div class="area distance">
          <div class="label">{{ $t('distance') }}</div>
          <cl-text-input border-less size="tiny"/>
        </div>
        <div class="area type">
          <div class="label">{{ $t('type') }}</div>
          <cl-text-input border-less size="tiny"/>
        </div>
        <div class="area ammo">
          <div class="label">{{ $t('ammo') }}</div>
          <cl-text-input border-less size="tiny"/>
        </div>
        <div class="area property">
          <div class="label">{{ $t('specific-properties') }}</div>
          <cl-text-input border-less size="tiny"/>
        </div>
      </div>
      <div class="weapon">
        <div class="area name">
          <div class="label">{{ $t('weapons') }}</div>
          <cl-text-input border-less size="tiny"/>
        </div>
        <div class="area level">
          <div class="label">{{ $t('level') }}</div>
          <cl-text-input border-less size="tiny"/>
        </div>
        <div class="area attack-mod">
          <div class="label">{{ $t('mod-attack') }}</div>
          <cl-text-input border-less size="tiny"/>
        </div>
        <div class="area damage">
          <div class="label">{{ $t('demage') }}</div>
          <cl-text-input border-less size="tiny"/>
        </div>
        <div class="area critical">
          <div class="label">{{ $t('critical') }}</div>
          <cl-text-input border-less size="tiny"/>
        </div>
        <div class="area distance">
          <div class="label">{{ $t('distance') }}</div>
          <cl-text-input border-less size="tiny"/>
        </div>
        <div class="area type">
          <div class="label">{{ $t('type') }}</div>
          <cl-text-input border-less size="tiny"/>
        </div>
        <div class="area ammo">
          <div class="label">{{ $t('ammo') }}</div>
          <cl-text-input border-less size="tiny"/>
        </div>
        <div class="area property">
          <div class="label">{{ $t('specific-properties') }}</div>
          <cl-text-input border-less size="tiny"/>
        </div>
      </div>
      <div class="weapon">
        <div class="area name">
          <div class="label">{{ $t('weapons') }}</div>
          <cl-text-input border-less size="tiny"/>
        </div>
        <div class="area level">
          <div class="label">{{ $t('level') }}</div>
          <cl-text-input border-less size="tiny"/>
        </div>
        <div class="area attack-mod">
          <div class="label">{{ $t('mod-attack') }}</div>
          <cl-text-input border-less size="tiny"/>
        </div>
        <div class="area damage">
          <div class="label">{{ $t('demage') }}</div>
          <cl-text-input border-less size="tiny"/>
        </div>
        <div class="area critical">
          <div class="label">{{ $t('critical') }}</div>
          <cl-text-input border-less size="tiny"/>
        </div>
        <div class="area distance">
          <div class="label">{{ $t('distance') }}</div>
          <cl-text-input border-less size="tiny"/>
        </div>
        <div class="area type">
          <div class="label">{{ $t('type') }}</div>
          <cl-text-input border-less size="tiny"/>
        </div>
        <div class="area ammo">
          <div class="label">{{ $t('ammo') }}</div>
          <cl-text-input border-less size="tiny"/>
        </div>
        <div class="area property">
          <div class="label">{{ $t('specific-properties') }}</div>
          <cl-text-input border-less size="tiny"/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import ClMainLabel from '@/components/ClMainLabel.vue';
import ClTextInput from '@/components/ClTextInput.vue';

export default {
  name: 'ClWeapons',
  components: { ClTextInput, ClMainLabel },
};
</script>
<style scoped>
.weapons {
  margin-top: 6px;
  &>.label {
    width: 200px;
  }
  .weapon {
    padding: 2px;
    background: #333;
    margin-left: 12px;
    margin-bottom: 4px;
    display: grid;
    gap: 2px;
    grid-template-areas:
      "N N N L M D D"
      "C S T A A P P";
  }
  .area {
    background: white;
    padding: 4px;
    .label {
      text-align: left;
      font-size: 8px;
      text-transform: uppercase;
    }
  }
  .name {
    grid-area: N;
    border-top-left-radius: 4px;
  }
  .level {
    grid-area: L;
  }
  .attack-mod {
    grid-area: M;
    width: 60px;
  }
  .damage {
    grid-area: D;
    border-top-right-radius: 4px;
  }
  .critical {
    grid-area: C;
    border-bottom-left-radius: 4px;
  }
  .distance {
    grid-area: S;
  }
  .type {
    grid-area: T;
  }
  .ammo {
    grid-area: A;
  }
  .property {
    grid-area: P;
    border-end-end-radius: 4px;
  }
}
</style>
