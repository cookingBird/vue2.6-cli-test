<script>
  export default {
    name: 'Auth',
    props: {
      funCode: {
        type: String,
      },
      store: Object
    },
    computed: {
      isAuthed() {
        const connector = this.$connector;
        const authState = this.$store?.state?.auth || this.store;
        return (funCode) =>
          (this.funCode === '*' || this.funCode === '' || this.funCode === void 0)
            ? true
            : connector?.isMain()
              ? authState.funCode.find(code => code == funCode)
              : authState.mainBtnAuthed.find(btn => btn.funCode == funCode)
      },
      buttonInfo() {
        const connector = this.$connector;
        const authState = this.$store?.state?.auth || this.store;
        return (funCode) => connector?.isMain()
          ? authState.btnInfo.find(btn => btn.funCode == funCode)
          : authState.mainBtnAuthed.find(btn => btn.funCode == funCode)
      }
    },
    watch: {
      isAuthed: {
        immediate: true,
        handler(val, oldVal) {
          if (val && val !== oldVal) {
            const connector = this.$connector;
            const el = this.$children[0]?.$el || this.$children[0];
            if (el) {
              const { funType, openMode, route, reqPath } = this.buttonInfo
              if (funType === 1 && openMode !== 'iframe' && openMode !== 'black') {
                //btn
                el.addEventListener('click', () => {
                  if (connector.isMain()) {
                    //主应用
                    switch (openMode) {
                      case 'self': {
                        router.push(route)
                        return
                      }
                      case 'open': {
                        window.open(reqPath)
                        return
                      }
                    }
                  }
                  else {
                    //子应用
                    switch (openMode) {
                      case 'self': {
                        connector.$send({
                          target: 'main',
                          type: 'router',
                          data: {
                            to: route
                          }
                        })
                        return
                      }
                      case 'open': {
                        connector.$send({
                          target: 'main',
                          type: 'open',
                          data: {
                            to: reqPath
                          }
                        })
                        return
                      }
                    }
                  }
                })
              }
            }
          }
        }
      }
    },
    render() {
      return this.isAuthed(this.funCode) ? this.$slots.default : null;
    }
  }
</script>
