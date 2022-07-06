<template>
    <div class="card card-default">
        <div class="card-header">
            <h3 class="card-title">Laboratorios</h3>&nbsp;&nbsp;

            <div class="card-tools">
                <button class="btn btn-primary btn-sm" @click="abrirModal()"><i class="fa fa-plus"></i> Nuevo</button>
                <!-- <button type="button" class="btn btn-tool" data-card-widget="collapse">
                    <i class="fas fa-minus"></i>
                </button>
                <button type="button" class="btn btn-tool" data-card-widget="remove">
                    <i class="fas fa-times"></i>
                </button> -->
            </div>
        </div>
        <!-- /.card-header -->
        <div class="card-body">
           
            <div class="row">
                <div class="col-md-12">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Número 1</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>

        <div class="card-footer">
       
        </div>

        <Modal />
    </div>
</template>

<script setup>
    import Modal from './Modal.vue'
  
    const abrirModal = () => {
        $('#modal-example').modal('show');
    }
   
</script>

