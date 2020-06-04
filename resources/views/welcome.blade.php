@extends('layouts.layout')

@section('content')



        <div class="col-12" >
            <div id="map_canvas" style="width: auto; height: 800px;"></div>
        </div>
        <div class="col-12">
        <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">modelo</th>
                        <th scope="col">lat</th>
                        <th scope="col">log</th>
                        <th scope="col">usuario</th>
                        <th scope="col">placa</th>
                        <th scope="col">capacidad</th>
                        <th scope="col">año</th>
                        </tr>
                    </thead>
                    <tbody>
                    @foreach ($puntos as $punt)
                     <tr>
                       
                       <td>{{$punt->name}}</td>
                       <td>{{$punt->lat}}</td>
                       <td>{{$punt->lng}}</td>
                       <td>{{$punt->vehiculo->user->name}}</td>
                       <td>{{$punt->vehiculo->placa}}</td>
                       <td>{{$punt->vehiculo->capacidad}}</td>
                       <td>{{$punt->vehiculo->anio}}</td>
                       </tr>
                     @endforeach
                        
                      
                    </tbody>
        </table>
        </div>


@endsection