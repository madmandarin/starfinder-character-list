<template>
  <div><slot/></div>
</template>

<script>
export default {
  name: 'ClMainLabel',
};
</script>

<style lang="scss" scoped>
div {
  user-select: none;
  text-align: left;
  font-weight: 600;
  font-stretch: 150%;
  text-transform: uppercase;
  font-size: 18px;
  color: #e5f7ff;
  padding: 0 12px 4px 20px;
  line-height: 18px;
  min-width: 180px;
  max-width: 210px;
  background: url("@/assets/circle.svg") -55px -20px no-repeat,
              url("@/assets/circle.svg") 160px -30px no-repeat,
              linear-gradient(90deg, #08345e 0%, #1466a7 100%);
  position: relative;
  border-top: 2px solid #59bce7;
  box-sizing: border-box;
  clip-path: polygon(
    0% 0%,
    calc(100% - 12px) 0%,
    100% 12px,
    100% 12px,
    100% 100%,
    12px 100%,
    0% calc(100% - 12px),
    0% 0
  );
  &:before {
    content: '';
    position: absolute;
    background: #59bce7;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    clip-path: polygon(
        100% 16px,
        calc(100% - 15px) 3px,
        calc(100% - 15px) 0,
        calc(100% - 16px) 0,
        calc(100% - 16px) 4px,
        calc(100% - 2px) 16px,
        calc(100% - 2px) calc(100% - 3px),
        20px calc(100% - 3px),
        6px calc(100% - 17px),
        6px 0,
        5px 0,
        5px calc(100% - 16px),
        20px calc(100% - 1px),
        100% calc(100% - 1px)
    );
  }
  &:after {
    content: '';
    position: absolute;
    background: #59bce7;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    clip-path: polygon(
        100% 0,
        calc(100% - 12.5px) 0,
        calc(100% - 2px) 10px,
        calc(100% - 2px) calc(100% - 3px),
        14px calc(100% - 3px),
        2px calc(100% - 14.5px),
        2px 0px,
        0 0,
        0 calc(100% - 14px),
        12.5px calc(100% - 1px),
        100% calc(100% - 1px)
    );
  }
}
</style>
