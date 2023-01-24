import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/_models/member';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-members-details',
  templateUrl: './members-details.component.html',
  styleUrls: ['./members-details.component.css']
})

export class MemberDetailsComponent implements OnInit {
  member: Member | undefined;


  constructor(private memberService: MembersService, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember(){
    var username = this.route.snapshot.paramMap.get('username');
    if(!username)return;
    this.memberService.getMember(username).subscribe({
      next: member => this.member = member
    });
  }

}
