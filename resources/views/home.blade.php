@extends('layouts.layout')

@section('content')
<div class="container-fluid" style="margin-top: 25px; margin-bottom: 50px">

            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        Guardar Ubicación
                    </div>
                    <div class="card-body">
                        <form id="form-create" role="form" accept-charset="UTF-8" enctype="multipart/form-data">
                            <input type="hidden" name="_token" value="{{csrf_token()}}" id="token-create" />
                            <div class="form-group">
                                <label for="exampleInputEmail1">Modelo de Vehiculo</label>
                                <input type="text" class="form-control" name="name" id="name" aria-describedby="emailHelp">
                                <small class="pull-left" style="font-size: 11px;color: #ff6d5e;" id="error-name"></small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Color</label>
                                <input type="text" class="form-control" name="color" id="color" >
                                <small class="pull-left" style="font-size: 11px;color: #ff6d5e;" id="error-name"></small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Placa</label>
                                <input type="text" class="form-control" name="placa" id="placa" >
                                <small class="pull-left" style="font-size: 11px;color: #ff6d5e;" id="error-name"></small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Año</label>
                                <input type="number" class="form-control" name="anio" id="anio" >
                                <small class="pull-left" style="font-size: 11px;color: #ff6d5e;" id="error-name"></small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Capacidad</label>
                                <input type="number" class="form-control" name="capacidad" id="capacidad" >
                                <small class="pull-left" style="font-size: 11px;color: #ff6d5e;" id="error-name"></small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Estado</label>
                                <input type="text" class="form-control" name="estado" id="estado" >
                                <small class="pull-left" style="font-size: 11px;color: #ff6d5e;" id="error-name"></small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Latitud</label>
                                <input type="text" id="txtLat" class="form-control" style="color:red" name="lat"  aria-describedby="emailHelp">
                                <small class="pull-left" style="font-size: 11px;color: #ff6d5e;" id="error-lat"></small>
                            </div>

                            <div class="form-group">
                                <label for="exampleInputEmail1">Longitud</label>
                                <input type="text" id="txtLng" class="form-control" style="color:red" name="lng"  aria-describedby="emailHelp">
                                <small class="pull-left" style="font-size: 11px;color: #ff6d5e;" id="error-lng"></small>
                            </div>
                            <div class="text-center">
                                <button type="button" class="btn btn-outline-primary" id="btn-ubications">Ubicaciones</button>
                                <button type="submit" class="btn btn-primary" id="btn-create">Guardar</button>
                                <button type="button" class="btn btn-primary  btn-primary " id="btn-preload-create"  style="display: none"><i class="fa fa-spinner fa-spin" style="font-size:18px;color:white"></i> Guardando..</button>
                            </div>
                        </form>
                    </div>
                </div>


            </div>
            <div class="col-12" >
                <div id="map_canvas" style="width: auto; height: 600px;"></div>
            </div>

        </div>
@endsection
